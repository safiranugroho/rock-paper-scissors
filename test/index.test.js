const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const { game } = require('../src/js/game');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

let homepage = 'http://localhost:8080';

describe('index page', () => {
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

    it('should display rock as first player\'s default hand', async () => {
      const firstPlayer = await driver.findElement(webdriver.By.id('first-player'));
      expect(firstPlayer).toBeTruthy();

      const firstPlayerHand = await driver.findElement(webdriver.By.id('first-player-hand'));
      expect(firstPlayerHand).toBeTruthy();

      const rock = await firstPlayerHand.getText();
      expect(rock).toBe('Rock');
    });

    it('should display rock as second player\'s default hand', async () => {
      const secondPlayer = await driver.findElement(webdriver.By.id('second-player'));
      expect(secondPlayer).toBeTruthy();

      const secondPlayerHand = await driver.findElement(webdriver.By.id('second-player-hand'));
      expect(secondPlayerHand).toBeTruthy();

      const rock = await secondPlayerHand.getText();
      expect(rock).toBe('Rock');
    });

    it('should call play() when play button is clicked', async () => {
      spyOn(game, 'play');

      const playButton = await driver.findElement(webdriver.By.id('play-button'));
      expect(playButton).toBeTruthy();

      const clicked = await playButton.click();
      if (clicked === true) {
        expect(game.play).toHaveBeenCalled();
      }
    });
});
