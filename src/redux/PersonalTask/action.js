import { USER_PERSONAL_TASK } from './types';

export const setPersonalTaskList = (playload) => {
    return {
        type: USER_PERSONAL_TASK,
        playload,
    };
}


