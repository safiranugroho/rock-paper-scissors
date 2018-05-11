const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

jest.mock('../src/js/game');
const { game } = require('../src/js/game');
let mockShoot;
let mockPlay;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

let homepage = 'http://localhost:8080';

describe('index page', () => {
    beforeAll(() => {
      driver.get(homepage);

      mockShoot = spyOn(game, 'shoot');
      mockPlay = spyOn(game, 'play');
    });

    afterAll(() => {
      driver.quit();
    });

    it('should display rock as first player\'s default hand', async () => {
        const firstPlayerHand = await driver.findElement(webdriver.By.id('first-player-hand'));
        const text = await firstPlayerHand.getText();
        expect(text).toBe('rock');
    });

    it('should display rock as second player\'s default hand', async () => {
      const secondPlayerHand = await driver.findElement(webdriver.By.id('second-player-hand'));
      const text = await secondPlayerHand.getText();
      expect(text).toBe('rock');
    });

    it('should call play() when play button is clicked', async () => {
      const playButton = await driver.findElement(webdriver.By.id('play-button'));
      await playButton.click();
      setTimeout(() => {
        expect(game.play).toHaveBeenCalled();
      }, 1000);
    });

    it('should call shoot() twice when play button is clicked', async () => {
      const playButton = await driver.findElement(webdriver.By.id('play-button'));
      await playButton.click();
      setTimeout(() => {
        expect((game.shoot).calls.count()).toEqual(2);
      }, 1000);
    });
});
