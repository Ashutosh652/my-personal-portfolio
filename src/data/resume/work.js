/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: "NumericMind",
    position: "Python Developer",
    url: "https://www.numericmind.com/",
    startDate: "2024-11-04",
    summary:
      "NumericMind is a leading statistical analysis and data solutions company serving clients in the USA and Nepal and specializing in providing comprehensive Clinical Trials Programming services to industries such as Biotech, Healthcare, and Pharmaceuticals.",
    highlights: [],
  },
  {
    name: "Milo Logic Pvt. Ltd.",
    position: "Backend Developer",
    url: "https://www.milologic.com/",
    startDate: "2024-01-01",
    endDate: "2024-11-04",
    summary:
      "Milo Logic is an independent, full-service digital company that provides its software development services to companies across the world. It also builds in-house products to consume themselves and to sell in the market.",
    highlights: [
      "Developed the Backend for a SaaS system to use internally in the company as well as to sell it as a product.",
      "Developed a web scraping system using Selenium to scrape data from websites in order to use for training AI models.",
      "Developed and deployed quick proof of concept APIs (built using FastAPI) on a Virtual Private Server.",
      "Developed custom APIs for no-code/low-code ERP/CRM platforms like Odoo and Frappe. Managed the development and deployment of the APIs on a development server on Linode.",
    ],
  },
  {
    name: "Tech Temple",
    position: "Python Developer",
    url: "https://www.techtemple.com.np/",
    startDate: "2023-10-01",
    endDate: "2024-01-01",
    summary: `Tech Temple builds websites, apps, and boost the online presence of customers with digital marketing and SEO expertise.`,
    highlights: [
      "Developed a template for a CMS using Flask that aided in quick development of future projects.",
      "Created more websites for clients like restaurants, hotels, and more using that CMS",
    ],
  },
];

export default work;
