import React from 'react'
import Moment from 'react-moment'

const FormatDate = (props) => {
   return (
      <Moment format={props.format}>{props.dateToFormat}</Moment>
   )
}

export default FormatDate