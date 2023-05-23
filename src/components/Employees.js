import React, { useState, useEffect } from 'react';

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://guarded-chamber-55183.herokuapp.com/employees') // replace '/api/employees' with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setEmployees(data));
    }, []);

    return (
        <div id='employees' className='text-center'>
            <h1>Our Team</h1>
            <div className='container'>
                <div className='row'>
                    {employees.map((employee) => (
                        <div key={employee.id} className='col-xs-12 col-md-6'>
                            {/* replace 'employee.id', 'employee.name', etc. with your actual employee object properties */}
                            <img
                            src={employee.image}
                            alt={employee.name}
                            width="auto"
                            height="200"
                            className="d-inline-block align-top"/>
                            <h2>{employee.name}</h2>
                            <p>{employee.jobtitle}</p>
                            {/* Add more information as needed */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Employees;
