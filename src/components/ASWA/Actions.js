import React from 'react'
import StartAuction from './../ASWA/actionServices/StartAuction';
import StopAuction from './../ASWA/actionServices/StopAuction';


const Actions = ({ pdd, actionServices }) => (
  <div id="actions">

    <StartAuction
      price={pdd.price}
      supplier={pdd.supplier}
      startup={pdd.startup}
      product={pdd.product}
      minprice={pdd.minprice}
    />
    <StopAuction />

  </div>
)


export default Actions
