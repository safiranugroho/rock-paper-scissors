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

    it('should display rock as first player\'s default hand', () => {
      driver.findElement(webdriver.By.id('first-player-hand'))
            .then((firstPlayerHand) => {
              firstPlayerHand.getText()
                             .then((text) => {
                               expect(text).toBe('rock');
                             })
                             .catch((error) => {
                               throw error;
                             });
            })
            .catch((error) => {
              throw error;
            });
    });

    it('should display rock as second player\'s default hand', () => {
      driver.findElement(webdriver.By.id('second-player-hand'))
            .then((secondPlayerHand) => {
              secondPlayerHand.getText()
                              .then((text) => {
                                expect(text).toBe('rock');
                              })
                              .catch((error) => {
                                throw error;
                              });
            })
            .catch((error) => {
              throw error;
            });
    });

    it('should call play() when play button is clicked', () => {
      driver.findElement(webdriver.By.id('play-button'))
            .then((playButton) => {
              playButton.click()
                        .then(() => {
                          expect(game.play).toHaveBeenCalled();
                        })
                        .catch((error) => {
                          throw error;
                        });
            })
            .catch((error) => {
              throw error;
            });
    });

    it('should call shoot() twice when play button is clicked', () => {
      driver.findElement(webdriver.By.id('play-button'))
            .then((playButton) => {
              playButton.click()
                        .then(() => {
                          expect((game.shoot).calls.count()).toEqual(2);
                        })
                        .catch((error) => {
                          throw error;
                        });
            })
            .catch((error) => {
              throw error;
            });
    });
});
