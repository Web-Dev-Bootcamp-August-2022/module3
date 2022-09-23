import { useState, useEffect } from "react";
import axios from 'axios';
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]); // 1. Setting 'apartments' state variable to be an empty array
  const API_URL = process.env.REACT_APP_BASE_URL;
  
  useEffect(()=>{ // 3. Get Request to the API to update 'apartments' state variable
    axios.get(`${API_URL}/apartments`)
          .then(response => setApartments(response.data))
          .catch(err => console.log(err))
          // eslint-disable-next-line 
  }, [])

  if(apartments.length === 0){ // 2. Rendering this JSX while I wait for the data from the API to load
    return  <>
              <h3>List of apartments</h3>
              <p>Loading...</p>
            </>
  }
  return ( // 4. Render the list of apartments from the API
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}
 
export default ApartmentsPage;