import { PROJECT_ACTION_TYPES } from "@/constants/actionTypes";
const { UPDATE_PROJECT_SUCCESS } = PROJECT_ACTION_TYPES;

const initialState = {
  project: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
