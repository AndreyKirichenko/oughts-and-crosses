import score from './score';

const reducer = (state, action) => {
  return {
    score: score(state, action)
  }
};

export default reducer;
