import React from 'react'

function CustomInput(props) {
  return (
    <div className='inputWrapper'>
        <label>{props.task}</label>
        <input value={props.value} className='inputform' type="text" placeholder={props.placeholder} onChange={props.change} />
    </div>
  )
}

export default CustomInput