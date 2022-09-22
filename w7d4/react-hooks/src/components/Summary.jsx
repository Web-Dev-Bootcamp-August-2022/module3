import React from 'react'

const Summary = (props) => {

    const {storeNumber, count} = props;
  return (
    <div>
        {storeNumber !== null && <p>You stored the number {storeNumber}</p>}

        <p>You clicked {count} times</p>
    </div>
  )
}

export default Summary