import score from './score';
import game from './game';

const reducer = (state, action) => {
  return {
    game: game(state, action),
    score: score(state, action),
  };
};

export default reducer;
