import React, { Component } from 'react'
import store from '../../../store'
import Countdown from 'react-countdown-now';
import { Image, Reveal } from "semantic-ui-react";
import  ElectionForm  from '../electionForm/ElectionForm'



class ElectionCountDown extends Component {

  constructor(props){
    super(props)
  }


render(){

  const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <ElectionForm />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};


  return(
    <div>
    <Countdown
    date={Date.now() + 5000}
    renderer={renderer}
  />

    </div>


  )
}


}

export default ElectionCountDown
