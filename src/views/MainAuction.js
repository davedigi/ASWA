import React, { useState } from 'react'
import { Button } from '@material-ui/core'
// eslint-disable-next-line no-unused-vars
import { makeStyles, withStyles } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { orange, red } from '@material-ui/core/colors';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import TimerOffIcon from '@material-ui/icons/TimerOff';
// eslint-disable-next-line no-unused-vars
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import CircularProgressWithLabel from '@material-ui/core/CircularProgress';

// start css TODO parametizer
const MaxiButtonASWA = withStyles((theme) => ({
  root: {
    width: 260,
    height: 120,
    fontSize: 56,
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
    margin: 10,
  },
}))(Button)

const MidButtonASWA = withStyles((theme) => ({
  root: {
    width: 100,
    height: 120,
    fontSize: 24,
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
    margin: 10,
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
// end css TODO parametizer

const MainAuction = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [running, setRunning] = React.useState(true);
  // const timerRef = React.useRef(0);
  // React.useEffect(
  //   () => () => {
  //     clearTimeout(timerRef.current);
  //   },
  //   [],
  // );
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);



  function handleClick(val,step,msg) {
    // console.log(val,step,msg)
    setCount(count + step);
    alert(msg);
    setRunning((prevLoading) => !prevLoading);
  }
  // oppure usare
    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    // });


  return (
    <div className="">
      {/* <p>hai cliccato {count} volte!</p> */}
      <div className={classes.placeholder}>
        {/* <Fade in={running} style={{ transitionDelay: running ? '800ms' : '0ms', }} unmountOnExit >   */}
          <CircularProgress />
          <CircularProgressWithLabel value={progress} />
        {/* </Fade> */}
      </div>

      <MaxiButtonASWA variant="contained" className={classes.button}
          endIcon={<AvTimerIcon 
                        style={{ fontSize: 60 }}>send
                      </AvTimerIcon>} 
          onClick={()=>handleClick(count,1,'START Action Service Called')}>
          {running ? 'RUNNING' : 'START'}
      </MaxiButtonASWA>
      <MidButtonASWA variant="contained" className={classes.button} endIcon={<TimerOffIcon style={{ fontSize: 30 }}>send</TimerOffIcon>} onClick={()=>handleClick(count,1,'STOP Action Service Called')}>
        STOP
      </MidButtonASWA>
    </div>
  )
}

export default MainAuction
