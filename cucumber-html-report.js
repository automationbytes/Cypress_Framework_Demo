const report = require("cucumberjs-playwright-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport",
openReportInBrowser: true,
staticFilePath: true,
saveCollectedJSON: true,
disableLog: false,
pageTitle: "Cypress Cucumber Reporter",
reportName: "<h3><I>  Cypress Reporter </I></h3>",
displayDuration: true,
durationInMS: true,
hideMetadata: false,
displayReportTime: true,
metadata: {
browser: {
name: "chrome",
version: "101",
},
device: "Local test machine",
platform: {
name: "Windows",
version: "11",
},
},
});