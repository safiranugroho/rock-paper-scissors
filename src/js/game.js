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
  if (hands[firstHand].winsOver === secondHand) {
    return 1;
  } else if (hands[secondHand].winsOver === firstHand) {
    return 2;
  }
}

module.exports = {
  play
};
