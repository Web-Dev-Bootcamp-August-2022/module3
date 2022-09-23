import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddApartmentPage() {
    const [headline, setHeadline] = useState("");     // <== ADD
    const [price, setPrice] = useState(1); 

    const navigate = useNavigate()

    const API_URL = process.env.REACT_APP_BASE_URL;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {title: headline, pricePerDay: price}
        // Send an Axios Post Request with the form data
        axios.post(`${API_URL}/apartments`, newApartment)
            .then(response => navigate('/'))
            .catch(err => console.log('err',err))
        // If request is successful, redirect your user to the list of apartments page
    }

    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>
        <form onSubmit={handleSubmit} >
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />
 
        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        
        <button type="submit">Create Apartment</button>
        
      </form>
      </div>
    );
  }
   
  export default AddApartmentPage;