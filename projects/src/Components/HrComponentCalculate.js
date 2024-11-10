import React, { useState } from 'react';
import './HrComponent.css'

const SalaryCalculationForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [daysPresent, setDaysPresent] = useState('');
  const [calculatedSalary, setCalculatedSalary] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!basicSalary || !daysPresent) {
      alert('Please enter valid inputs.');
      return;
    }

    const totalDaysInMonth = 30; 
    const salary = (parseFloat(basicSalary) / totalDaysInMonth) * parseInt(daysPresent);

    setCalculatedSalary(salary);
  };

  const handleInputChange = (setter) => (event) => setter(event.target.value);

  return (
    <div>
      <h2>Salary Calculation</h2>
      <form onSubmit={handleSubmit} id="salaryCalculationForm">
        <div>
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={handleInputChange(setEmployeeId)}
          />
        </div>
        <div>
          <label htmlFor="basicSalary">Basic Salary (₹):</label>
          <input
            type="number"
            id="basicSalary"
            value={basicSalary}
            onChange={handleInputChange(setBasicSalary)}
          />
        </div>
        <div>
          <label htmlFor="daysPresent">Days Present:</label>
          <input
            type="number"
            id="daysPresent"
            value={daysPresent}
            onChange={handleInputChange(setDaysPresent)}
          />
        </div>
        <button type="submit">Calculate Salary</button>
      </form>

      {calculatedSalary !== null && (
        <div id="salaryResult">
          <p>
            Calculated Salary for Employee {employeeId}: ₹{calculatedSalary.toFixed(2)}
          </p>
        </div>
      )}

      <div>
        <button className="edit-btn" onClick={() => alert('Edit attendance record functionality coming soon!')}>
          Edit Attendance
        </button>
        <button className="delete-btn" onClick={() => alert('Delete attendance record functionality coming soon!')}>
          Delete Attendance
        </button>
      </div>
    </div>
  );
};

export default SalaryCalculationForm;