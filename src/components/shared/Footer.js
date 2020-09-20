import React from 'react'
import Box from '@material-ui/core/Box'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: "auto",
  },
});

function handleClick(msg) {
  // console.log(val,step,msg)
  alert(msg);
}
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className="App-footer" p={1} m={1} >
        <Box width="100%"> &copy; WIM 2020 </Box>
      </Box >

    </div >
  )
}

export default Footer
