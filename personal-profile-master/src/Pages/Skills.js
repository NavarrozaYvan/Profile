import React from 'react';
import '../App.css'; 
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Skills = () => {
    return(
   <div className="text-center page-container">
      <h2 className="display-4 mb-4">Skills</h2>
      <ul className="list-unstyled">
        <li>HTML and CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Git and Github</li>
      </ul>
      <div className="d-flex flex-column">
        <Link to="/" className="btn btn-outline-light btn-lg my-2 animate-button">Go to Home</Link>

      </div>
    </div>
    )
}

export default Skills
