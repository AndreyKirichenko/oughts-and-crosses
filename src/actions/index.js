// const fetchData = (dispatch) => () => {
//   const preloadedState = JSON.parse(window.localStorage.getItem('state'));
// };
//
// const awardToComputer = () => {
//   return {
//     type: 'AWARD_TO_COMPUTER'
//   };
// };
//
// const awardToUser = () => {
//   return {
//     type: 'AWARD_TO_USER',
//   };
// };

const pickCross = () => {
  return {
    type: 'PICK_CROSS',
  };
};

const pickOught = () => {
  return {
    type: 'PICK_OUGHT',
  };
};

export {
  // awardToComputer,
  // awardToUser,
  pickCross,
  pickOught,
};
