import Axios from 'axios';
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


export const detailsStudent = (studentId) => async (dispatch, getState) => {
  dispatch({ type: STUDENT_DETAILS_REQUEST, payload: studentId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`https://reqres.in/api/users/${studentId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    console.log(data);
    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STUDENT_DETAILS_FAIL, payload: message });
  }
};

export const listStudentsPage1 = () => async (dispatch, getState) => {
  dispatch({ type: STUDENT_LIST1_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`https://reqres.in/api/users?page=1`);
    console.log(data);
    dispatch({ type: STUDENT_LIST1_SUCCESS, payload: data });
  }
  catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STUDENT_LIST1_FAIL, payload: message });
  }
};

export const listStudentsPage2 = () => async (dispatch, getState) => {
  dispatch({ type: STUDENT_LIST2_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`https://reqres.in/api/users?page=2`);
    console.log(data);
    dispatch({ type: STUDENT_LIST2_SUCCESS, payload: data });
  }
  catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: STUDENT_LIST2_FAIL, payload: message });
  }
};