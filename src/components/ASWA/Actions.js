import React from 'react'
import StartAuction from './../AWSA/actionServices/StartAuction';
import StopAuction from './../AWSA/actionServices/StopAuction';


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
