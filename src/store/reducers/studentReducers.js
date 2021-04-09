import {
  
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  
  STUDENT_LIST1_REQUEST,
  STUDENT_LIST1_SUCCESS,
  STUDENT_LIST1_FAIL,
  
  STUDENT_LIST2_REQUEST,
  STUDENT_LIST2_SUCCESS,
  STUDENT_LIST2_FAIL,
} from '../types/studentConstants';


export const studentDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case STUDENT_DETAILS_REQUEST:
      return { loading: true };
    case STUDENT_DETAILS_SUCCESS:
      return { loading: false, student: action.payload };
    case STUDENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studentListOneReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST1_REQUEST:
      return { loading: true };
    case STUDENT_LIST1_SUCCESS:
      return { loading: false, students: action.payload };
    case STUDENT_LIST1_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studentListTwoReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST2_REQUEST:
      return { loading: true };
    case STUDENT_LIST2_SUCCESS:
      return { loading: false, students: action.payload };
    case STUDENT_LIST2_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
