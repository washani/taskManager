import { USER_PERSONAL_TASK, USER_WORK_TASK } from './types';

export const setPersonalTaskList = (playload) => {
    return {
        type: USER_PERSONAL_TASK,
        playload,
    };
}

export const setWorkTaskList = (playload) => {
    return {
        type: USER_WORK_TASK,
        playload,
    };
}



