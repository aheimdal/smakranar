import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Employees.css'

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://guarded-chamber-55183.herokuapp.com/employees') // replace '/api/employees' with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setEmployees(data));
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="employees" data-aos="fade-in">
            <div className='title-container text-center'>
                <h1>Hér er Teymið okkar</h1>
            </div>
            <div className='cards-container'>
                <div className='container-fluid'>
                    <div className='row'>
                        {employees.map((employee) => (
                            <div key={employee.id} className='col-xs-12 col-md-6 col-lg-4'>
                                <div className='card'>
                                    <img src={employee.image} alt={`${employee.name}`} className="card-img-top" />
                                    <div className="card-body">
                                        <p className='job-title'>{employee.jobTitle}</p>
                                        <h4 className='employee-name'>{employee.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Employees;
