import React from "react";
import { Card, Button } from "react-bootstrap";

const Profile = ({ portfolio,handleShow,isShow }) => {
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>{isShow?"hide profile":'display profile'}</Button>
      {(isShow)?portfolio.map((el, key) => (
        <Card style={{ width: "18rem" }} key={key}>
          <Card.Img variant="top" src={el.src} />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Title>{el.profession}</Card.Title>
            <Card.Text>{el.bio}</Card.Text>
          </Card.Body>
        </Card>
      )):<p>click on the button to show the profile</p>}
    </div>
  );
};

export default Profile;
