import { USER_PERSONAL_TASK} from "./types";

const initState = {
  personalTaskList: [],
};

const setLeaderbordInfo = (state, data) => {
  return {
    ...state,
    personalTaskList: data,
  };
};


const personalDetails = (state = initState, { type, playload }) => {
  switch (type) {
    case USER_PERSONAL_TASK: {
      return setLeaderbordInfo(state, playload);
    }

    default:
      return state;
  }
};

export default personalDetails;
