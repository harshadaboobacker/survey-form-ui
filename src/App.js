
import './App.css';
import {useState} from 'react';
import React from 'react';
import logo from './gig.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Success from './Components/Success';


const App = () => {
  const [formData, setFormData ] = useState({
    name: '',
    gender: '',
    DateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/surveyapi/submit-form", formData);
      setSuccess(true);
      setFormData({
        name: '',
        gender: '',
        DateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
        address: '',
        message: '',
      })
      setShowModal(true);
    } catch (err) {
      alert("Error submitting form: " + err.message);
    }
  };

const handleCloseModal = () => setShowModal(false);

  return (

    
   
    <div className="survey-form-container">
      
      <img style={{ width: '60px', maxHeight: '40px' }} src={logo} alt="Logo" className="gig-png" />

      <h1>Survey Form</h1>
      {success && <p className='success-message'>Submitted !</p>}
      <form onSubmit={handleSubmit} >
        <div className="survey-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        </div>

        <div className="survey-form">
        <label htmlfor="Dob">Date Of Birth</label>
        <input
        type="date"
        id="Dob"
        name="DateOfBirth"
        value={formData.DateOfBirth}
        onChange={ handleChange}
        required
        />
        </div>


        <div className="survey-form">
        <label htmlFor="nationality">Nationality:</label>
        <select
     
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        >
          <option value="">Select nationality</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Other">Other</option>
        </select>
        
        
        </div>
          

        <div className="survey-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
         
        <div className="survey-form">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        </div>
        


        <div className="survey-form">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        </div>
        
        <div className="survey-form">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <Success show={showModal} handleClose={handleCloseModal} />
    </div>
    
  );
}

export default App;
