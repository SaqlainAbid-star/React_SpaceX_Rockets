import './App.css';
import React, { useState, useEffect, Fragment } from 'react';

// import { Button, Card } from 'react-bootstrap';  // React Bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Card } from './components/Card'
import { Modal } from './components/Modal';
import { Filter } from './components/Filter';

function App() {

  const [rockets, setrockets] = useState([]);
  const [filteredRockets, setfilteredRockets] = useState([]);


  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then(rockets => {
        setrockets(rockets)
        setfilteredRockets(rockets)
      })
  }, []);

  const handleChange = (e) => {
    setfilteredRockets(
      rockets.filter(i => i.height.feet > e.target.value)
    )
  }


  return (

    <div className="container">
      <p id="space">SpaceX Rockets Encyclopedia</p>
      <Filter onChange={handleChange} />
      < div className="row">
        {filteredRockets.map((rocket) => (
          <Fragment>
            <Card rocket={rocket} />
            <Modal rocket={rocket} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;



