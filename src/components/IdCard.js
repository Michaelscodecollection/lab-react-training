import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard box">
      <img src={props.picture} alt="profile pic" />
      <div className="right">
        <strong>First Name</strong>:{props.firstName}
        <br></br>
        <strong>Last Name</strong>:{props.lastName}
        <br></br>
        <strong>Gender</strong>:{props.gender}
        <strong>Height</strong>: {props.height}
        <br></br>
        <strong>Birth</strong>: {props.birth.toDateString()}
      </div>
    </div>
  );
}

export default IdCard;
