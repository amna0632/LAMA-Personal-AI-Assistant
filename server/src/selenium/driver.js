const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let driver;

async function getDriver() {

    if (driver) return driver;

    const options = new chrome.Options();

    options.setChromeBinaryPath(
        "C:\\Users\\S.A COMPUTER\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
    );

    options.addArguments(
        "--user-data-dir=C:\\Ai-Assistant\\server\\chrome-profile",
        "--start-maximized",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--no-sandbox"
    );

    driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    return driver;
}

module.exports = getDriver;