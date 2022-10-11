import {Container, Row} from "react-bootstrap";
import './App.css';
import { Fragment } from 'react';
import Nav from "./Components/nav";

function App() {
  return (
    <Fragment>
        <Nav name='Logo' />
         <Container as={"section"} fluid className="" >
          <Row>

          <div className="d-flex flex-column">
            <h2 className="text-center hello">Hello!</h2>
            <p className="text-center php">I'm a creative PHP web developer</p>
            <div className="d-block"></div>

            <div className="row pad-it">
            <div className="col-sm put-img"></div>

            <div className="col-sm pad ">
              <h2 className="fw-1">About me</h2>
              <p className="text">I am an allround web developer. 
                I am a senior programmer with good knowledge of front-end techniques. 
                Vitae sapienpellentesque habitant morbi tristique senectus et.
                 Aenean sed adipiscing diam donec adipiscing tristique risus. 
              </p>
             </div>

            <div className="col-sm space">
              <h2 className="details">Details</h2>
              <b>Name:</b>
              <p>Hunter Norton</p>
              <b>Age:</b>
              <p>33 years</p>
              <b>Location:</b>
              <p>'s-Hertogenbosch, The Netherlands, Earth</p>
              <div className="d-flex justify-content-around">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter twitter " aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          </div>
          </Row>
          
         


         </Container>

    </Fragment>
  );
}

export default App;
