// src/components/ServicesComponent.js
import React from 'react';
import './ServiceComponent.css'


const ServicesComponent = () => {
  return (
    <div className='service'>
      <h1>Our Services</h1>
      <div className='service-content'>
      <h2>What are Scout-tribes’ major services for playing/ working individuals in the sports ecosystem?</h2>
      <p>As a professional scouting and sporting company, We do scholarship and sponsorship contracts with professional sportsmen at the grassroots level,
         We provide every possible resource to accelerate their sporting journey.
         we’re committed to creating a better ecosystem for all sporting professionals</p>
        <li>Sponsorships and scholarships, brand deals.</li>
        <li>Sports contracts for govt./private organizations.</li>
        <li>Playing and mentoring facilities.</li>
        <li>Scouting and networking facilities for clubs, leagues globally.</li>
        <li>Health checks and medical backups for players.</li>
        <li>Job and career-based opportunities (globally)</li>
      </div>
    </div>
  );
}

export default ServicesComponent;
