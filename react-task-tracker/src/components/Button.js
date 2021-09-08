import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {   
    return (

            <button className="button"  style={{backgroundColor:props.color}} onClick= {props.onClick} >{props.text} </button>
   
    )
}
Button.defaultProps={
    color : 'steelblue'
}

Button.propTypes={
 text : PropTypes.string,
 color :PropTypes.string,
 onclick :PropTypes.func, 
}
export default Button
