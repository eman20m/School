
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsStudent } from '../../store/actions/studentActions';
import './studentView.css'
const StudentView = (props) => {
  const studentId = props.match.params.id;
  const dispatch = useDispatch();
  const studentDetails = useSelector(state => state.studentDetails);
  console.log(studentDetails);
  useEffect(() => {
    dispatch(detailsStudent(studentId));
  }, [dispatch, studentId]);
 
  return (
    <div className="container justify-content-center align-items-center flex-column">
    <div class="card mb-3" style={{maxWidth: '600px'}}>
    <div class="row no-gutters">
        <div class="col-md-4">
        <img src={studentDetails?.student?.data?.avatar} class="card-img" alt="Student Photo"/>
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{studentDetails?.student?.data?.first_name  } {studentDetails?.student?.data?.last_name}</h5>
            <p class="card-text">{studentDetails?.student?.data?.email}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </div>
    </div>
    </div>
  );
};
export default StudentView;
