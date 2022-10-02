import React from 'react'
import '../App.css'
import CustomButton from './CustomButton'

function Card(props) {
  return (
    <div className='card' style={{backgroundColor:props.complete===true && '#00FF00' , color:props.complete===true && 'white'}}>
        <h2>
            {props.id}
        </h2>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <div className='btngap'>
            <CustomButton name='Task complete' bgcolor='#014421' color='white' click={props.update} />
            <CustomButton name='Task Delete' bgcolor='red' color='white' click={props.delete}  />
        </div>
    </div>
  )
}

export default Card