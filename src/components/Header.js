import React from 'react'
import '../App.css'
import CustomButton from './CustomButton'

function Header(props) {
  return (
    <div className='header'>
        <h1>Task Manager</h1>
        <div className='btnWrapper'>
            <CustomButton click={props.handleInput}  name='Add' bgcolor='#00BFFF' color='white'  />
        </div>
    </div>
  )
} 

export default Header