import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import '../css/Employees.css';

function Employees() {
    const { t } = useTranslation();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://guarded-chamber-55183.herokuapp.com/employees') // replace '/api/employees' with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setEmployees(data));
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        window.addEventListener('load', () => {
            const jobTitles = document.getElementsByClassName('job-title');
            for (let i = 0; i < jobTitles.length; i++) {
                const width = jobTitles[i].offsetWidth;
                const redLine = jobTitles[i].getElementsByClassName('red-line')[0];
                redLine.style.width = width + 'px';
            }
        });
    }, []);

    return (
        <div className="employees">
            <div className='employee-title-container text-center'>
                <h1>{t('OUR_TEAM')}</h1>
            </div>
            <div className='employee-cards-container'>
                <div className='employee-container-fluid'>
                    <div className='row'>
                        {employees.map((employee) => (
                            <div key={employee.id} className='col-xs-12 col-md-6 col-lg-4'>
                                <div className='employee-card' data-aos="fade-in">
                                    <img src={employee.image} alt={`${employee.name}`} className="employee-card-img-top" />
                                    <div className="employee-card-body">
                                        <div className='employee-job-title'>
                                            {employee.jobTitle}
                                            <div className='employee-red-line'></div>
                                        </div>
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
