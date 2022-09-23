import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
 
function QueryStringExample(props) {
  const [searchParams, setSearchParams] = useSearchParams();
 
  // Get the values from the URL query strings 
  // Example: http://localhost:3000/example?place=Miami&destType=Hotel
  const place = searchParams.get("place");
  const destType = searchParams.get("destType");
  
  useEffect(() => {
    console.log('place', place)
    console.log('destType', destType);
    // Write an axios query request and pass 'place' and 'destType'
    // in order to fetch the most accurate results from your DB

  }, []);
 
  return (
    <div>
      <h2>Query String Example</h2>
      <p>
        Open the console to see the logged query string values
      </p>
    </div>
  )
}
 
export default QueryStringExample;