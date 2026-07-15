const getDriver = require("../selenium/driver");
const { By, Key, until } = require("selenium-webdriver");

const sendMessage = async (contact, message) => {

    try {

        const driver = await getDriver();

        await driver.get("https://web.whatsapp.com");

        // Wait for WhatsApp to load
        await driver.wait(
            until.elementLocated(
                By.css('input[placeholder="Search or start a new chat"]')
            ),
            60000
        );

        // Search Box
        const searchBox = await driver.findElement(
            By.css('input[placeholder="Search or start a new chat"]')
        );

        await searchBox.click();

        await searchBox.sendKeys(Key.CONTROL, "a");
        await searchBox.sendKeys(Key.DELETE);

        await searchBox.sendKeys(contact);

        await driver.sleep(3000);

        // Open first search result
        await searchBox.sendKeys(Key.ARROW_DOWN);
        await driver.sleep(500);
        await searchBox.sendKeys(Key.ENTER);

        // Wait chat
        await driver.sleep(2000);

        // Message Box
        const messageBoxes = await driver.findElements(
            By.css('div[contenteditable="true"]')
        );

        const messageBox = messageBoxes[messageBoxes.length - 1];

        await messageBox.click();

        await messageBox.sendKeys(message);

        await messageBox.sendKeys(Key.ENTER);

        return {
            success: true,
            reply: `Message sent to ${contact}`
        };

    }

    catch (err) {

        console.log(err);

        return {
            success: false,
            reply: err.message
        };

    }

};

module.exports = {
    sendMessage
};