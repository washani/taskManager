import { USER_PERSONAL_TASK, USER_WORK_TASK} from "./types";

const initState = {
  personalTaskList: [],
  workTaskList: [],
};

const setPersonalTaskInfo = (state, data) => {
  return {
    ...state,
    personalTaskList: data,
  };
};

const setWorkTaskInfo = (state, data) => {
  return {
    ...state,
    workTaskList: data,
  };
};


const personalDetails = (state = initState, { type, playload }) => {
  switch (type) {
    case USER_PERSONAL_TASK: {
      return setPersonalTaskInfo(state, playload);
    }
    case USER_WORK_TASK: {
      return setWorkTaskInfo(state, playload);
    }
    default:
      return state;
  }
};

export default personalDetails;
