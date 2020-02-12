import React from "react";
import { Link } from 'react-router-dom';

var headerStyle = {
  display:'grid',
  justifyContent:'left',
  backgroundImage: "url('https://img1.mashed.com/img/gallery/7-vegetables-you-should-be-eating-and-7-you-shouldnt/intro-1543595549.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // height: '19vh',
  padding: '2vh',
  marginTop: '5vh',
  marginBottom: '5vh',
  color:'white',
  textShadow: '.1vh .1vh .7vh #000000',
  borderRadius: '4vh',
  border: '.25vh solid white',
  overflow: 'hidden',

}
var links = {
  color: 'white',
}

function Header(){
  return (
    <div style = {headerStyle}>
      <h1>Farmer's Market</h1>
      <div style = {links}>
      <Link to="/">Home</Link> | <Link to="/marketschedulelist">Market Schedule</Link> | <Link to="/producelist">Produce Offerings</Link>
      </div>
    </div>
  );
}


export default Header;
