const axios = require("axios");
const cheerio = require("cheerio");
// const argparse = require("argparse");
const XLSX = require("xlsx");
export default class GoogleOSINTScraper {
  constructor(query, numPages) {
    this.query = query;
    this.numPages = numPages;
    this.baseUrl =
      "https://cors-anywhere.herokuapp.com/https://www.google.com/search?q=";
    // this.headers = {
    //   "User-Agent":
    //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
    //   // HTTP/1.1 429 Too Many Requests
    //   "Content-Type": "text/html",
    //   "Retry-After": "3600"
    // };
    this.results = [];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
      ["url", "title", "email", "phonenumber", "detail"]
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // XLSX.writeFile(workbook, "output.xlsx");
  }

  _selectors(element) {
    const selectors = {
      links: "div.g",
      next: "a#pnnext"
    };
    return selectors[element];
  }

  _parsePage(html) {
    const $ = cheerio.load(html);
    const links = $(this._selectors("links"));
    links.each((index, element) => {
      const anchor = $(element).find("a");
      const titleElement = $(element).find("h3");
      const emailElement = $(element)
        .text()
        .match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      const phoneElement = $(element)
        .text()
        .match(
          /\b(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})\b/g
        );
      const detailElement = $(element).find("span");
      //     return this.type === 'text' && this.data.includes('@');
      // });
      // // email.text()
      // console.log(emailElement);
      if (anchor && titleElement) {
        const url = anchor.attr("href");
        const title = titleElement.text();
        const detail = detailElement.text();
        const email = emailElement ? emailElement[0] : null;
        const phone = phoneElement ? phoneElement[0] : null;

        this.results.push({
          url: url,
          title: title,
          email: email,
          phone: phone,
          detail: detail
        });
      }
    });
  }

  _saveToFile() {
    const workbook = XLSX.utils.book_new();
    let worksheet = XLSX.utils.aoa_to_sheet([
      ["url", "title", "email", "phonenumber"]
    ]);
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // const existingWorkbook = XLSX.readFile("output.xlsx");

    worksheet = XLSX.utils.aoa_to_sheet(
      this.results.map((result) => [
        result.url,
        result.title,
        result.email,
        result.phone,
        result.detail
      ])
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "output.xlsx");
    // existingWorkbook.Sheets["Sheet1"] = newWorksheet;
    // XLSX.writeFile(existingWorkbook, "output.xlsx");
  }

  async scrape() {
    for (let page = 1; page <= this.numPages; page++) {
      const url = `${this.baseUrl}${this.query}&start=${
        (page - 1) * 10
      }&num=100&hl=en`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          this._parsePage(response.data);

          const $ = cheerio.load(response.data);
          const nextPageLink = $(this._selectors("next")).attr("href");

          if (nextPageLink) {
            const nextPageUrl = `https://cors-anywhere.herokuapp.com/https://www.google.com${nextPageLink}`;
            const nextPageResponse = await axios.get(nextPageUrl);
          } else {
            break;
          }
        } else if (response.status === 429) {
          page--; // Ret
        } else {
          console.log(
            `Failed to retrieve page ${page}. Status Code: ${response.status}`
          );
          break;
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
        break;
      }
    }
    this._saveToFile();
    return this.results;
  }
}
// const parser = new argparse.ArgumentParser({ description: 'Contoh program dengan argparse' });
// parser.add_argument('-s', '--search', { help: 'search dorking', required: true });
// parser.add_argument('-p', '--pages', { help: 'pages next', type: 'int', required: true });
// const args = parser.parse_args();

// const query = args.search;
// const numPages = args.pages;

// const scraper = new GoogleOSINTScraper(query, numPages);
// scraper.scrape();
