import React from 'react';
import './Tags.css';

const Tags = () => {
  return (
    <div className="Tags">
      <div>
        <button>Type</button>
        <ul>
          <li>Human with antennae</li>
          <li>Antennae with human</li>
        </ul>
      </div>
      <div>

        <button>Status</button>
        <ul>
          <li>Alive</li>
          <li>Dead</li>
          <li>Suspense</li>
        </ul>
      </div>
      {/* <div>
        <button>Species</button>
        <ul>
          <li>Human</li>
          <li>Captus</li>
          <li>Reptil</li>
          <li>Ave</li>
        </ul>
      </div>
      <div>

        <button>Gender</button>
        <ul>
          <li>Man</li>
          <li>Male</li>
          <li>Suspense</li>
        </ul>
      </div>
      <button>Dimesion</button> */}
    </div>
  )
}

export default Tags


// pathName,
// name = '',
// type = '',
// status = '',
// species = '',
// gender = '',
// dimension = '',
// episode = ''