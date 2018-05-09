const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

let homepage = 'http://localhost:8080';

describe('user journey', () => {

    beforeAll(() => {
        driver.get(homepage);
        // driver.findElement(webdriver.By.id(username)).sendKeys(my_username);
        // return driver.findElement(webdriver.By.id(submit)).click();
    });

    afterAll(() => {
        return driver.quit();
    });

    it('should display Play button', async () => {
      const playButton = await driver.findElement(webdriver.By.id('play-button'));
      expect(playButton).toBeTruthy();

      playButton.getAttribute('text')
                .then((buttonText) => {
                  expect(buttonText).toBe('Play');
                })
                .catch((error) => {
                  console.log(error);
                });
    });

});
