const hands = {
  'rock': {
    winsOver: 'scissors'
  },
  'scissors': {
    winsOver: 'paper'
  },
  'paper': {
    winsOver: 'rock'
  }
}

const play = (firstHand, secondHand) => {
  if (firstHand === secondHand) return 0;
  return hands[firstHand].winsOver === secondHand ? 1 : 2;
}

module.exports = {
  play
};
