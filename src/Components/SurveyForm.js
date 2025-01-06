
import axios from "axios";
import Success from './Success';
import {useState} from 'react';


const SurveyForm = () => {
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
          await axios.post("https://survey-form-git-main-harshads-projects-bbafdaa8.vercel.app/surveyapi/submit-form", formData);
        
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
          
         
    
         
          
          <form onSubmit={handleSubmit} >
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>
             <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
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
    
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
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
    
    
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
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
              
    
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
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
             
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
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
            
    
    
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            </div>
            
            <div className="survey-form p-3 mb-2 bg-primary-subtle text-primary-emphasis">
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

export default SurveyForm