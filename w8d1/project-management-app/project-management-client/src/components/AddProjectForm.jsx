import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
 
function AddProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault(); // prevent default GET Request to be sent on form submit
 
    const requestBody = { title, description }; // Creating the object to send in your POST Request
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/projects`, requestBody)
      .then((response) => {
        props.refreshProjects() // update our list of projects
        // Reset the state
        setTitle("");
        setDescription("");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
 
 
  return (
    <div className="AddProject">
      <h3>Add Project</h3>
 
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddProject;