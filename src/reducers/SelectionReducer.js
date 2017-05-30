export default (state = null, action) => {
  switch(action.type){
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
//it can not be indefined

};

// state = null tells that if state is loaded first time return it as a value of null like as it does not have any selected library right now
