import React from 'react'

export const ClockTick = () => {
      const [Data, setData] = React.useState(new Date())
  
  
      function FormattedDate(props) {
          return (
              <h2>{new Date().toLocaleTimeString()}</h2>
          )
      }
  
      React.useEffect(() => {
          console.log("orologio header: ENTRO in useEffect()")
          const timer = setInterval(() => {
              setData((Data) => (new Date()))
          }, 1000);
          return () => {
              clearInterval(timer);
          };
      }, [])
  
      return (
          <div>
              <FormattedDate {...Data} />
          </div>
      );
  }
  // setInterval(Tick, 1000)
  export default ClockTick