const initialState = {
  computer: 0,
  user: 0,
};

const score = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case 'AWARD_TO_COMPUTER':
    return {
      computer: state.score.computer + 1,
      user: state.score.user,
    };

  case 'AWARD_TO_USER':
    return {
      computer: state.score.computer,
      user: state.score.user + 1,
    };

  default:
    return state.score;
  }
};

export default score;
