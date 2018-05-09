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
    });

    afterAll(() => {
        return driver.quit();
    });

    it('should display Play button', async () => {
      const playButton = await driver.findElement(webdriver.By.id('play-button'));
      expect(playButton).toBeTruthy();

      const playButtonText = await playButton.getText();
      expect(playButtonText).toBe('Play');
    });
});
