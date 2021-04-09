import './studentsList.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { listStudentsPage1, listStudentsPage2 } from '../../store/actions/studentActions';
import { Link } from 'react-router-dom';

export default function StudentList(){
    const studentListOne=useSelector((state)=> state.studentListOne);
    const studentListTwo=useSelector((state)=> state.studentListTwo);
    const [currentPage, setCurrentPage] = useState(0);

    console.log(studentListOne);
    console.log(studentListTwo);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(listStudentsPage1());
        dispatch(listStudentsPage2());
    }, [dispatch, currentPage]);

    
    return(
        <div>
        <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
            <div className="container text-center">
                <div className="mb-5 text-center text-white">
                    <h1>Students List</h1>
                </div>
            </div>
        </div>

        <div className="mx-5 text-center mt-5">
            <table className="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                <th className="h5">ID</th>
                <th className="h5">Frist NAME</th>
                <th className="h5">Last Name</th>
                </tr>
            </thead>
            <tbody>
                {   currentPage===1 ?(
                    studentListTwo.students?.data?.map((student, index)=>{
                        console.log(student);
                        return(
                            <tr key={index}>
                            <th className="h5"><Link to={`/student/${student.id}`}>{student.id}</Link></th>
                            <th className="h5"><Link to={`/student/${student.id}`}>{student.first_name}</Link></th>
                            <th className="h5"><Link to={`/student/${student.id}`}>{student.last_name}</Link></th>
                            </tr>
                        )
                    })
                ):(
                    studentListOne.students?.data?.map((student, index)=>{
                        console.log(student);
                        return(
                            <tr key={index}>
                            <th className="h5"><Link to={`/student/${student.id}`}>{student.id}</Link></th>
                            <th className="h5"><Link to={`/student/${student.id}`}>{student.first_name}</Link></th>
                            <th className="h5"><Link to={`/student/${student.id}`}>{student.last_name}</Link></th>
                            </tr>
                        )
                    })
                )
                
                }
                
            </tbody>
            </table>
        </div>

        <div className="row justify-content-center mb-5">
            <ul class="pagination justify-content-end mb-0 pt-5">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                    <i class="fas fa-angle-left"></i>
                    <span class="sr-only">Previous</span>
                    </a>
                </li>
            
                <li className={currentPage===2 ? 'page-item': 'page-item active'} onClick={() => { setCurrentPage(1) }}>
                    <a className="page-link" >1</a>
                </li>
                <li className={currentPage===2? 'page-item active': 'page-item'} onClick={() => { setCurrentPage(2) }}>
                    <a className="page-link" >2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>

        </div>

        </div>

    )
}