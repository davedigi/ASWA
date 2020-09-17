import React from 'react'
import StartAction from './actionServices/StartAuction'
import StopAction from './actionServices/StopAuction'


const Actions = ({ recordk, actionServices }) => (
  <div id="actions">

    <StartAuction
      price={recordk.price}
      supplier={recordk.supplier}
      startup={recordk.startup}
      product={recordk.product}
      minprice={recordk.minprice}
    />
    <StopAuction />

  </div>
)


export default Actions
