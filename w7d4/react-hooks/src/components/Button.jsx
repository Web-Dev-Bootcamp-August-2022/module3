import React from 'react'

const Button = ({ count, setCount, buttonContent }) => {

    const updateCount = buttonContent === "+" ? count + 1 : count -1;
  return (
    <button onClick={() => setCount(updateCount)}> {buttonContent} </button>
  )
}

export default Button