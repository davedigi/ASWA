import React from 'react'
import WinnerAuction from '../components/ASWA/actionServices/WinnerAuction'
import { clockStates } from '../components/ASWA/actionServices/TypesAuction'
/* This advanced setup simply ensures the WebSocket is always trying to connect
 if the server goes down or if there is network failure, so 
 whenever the server is back up the client is reconnected.
 */
class WebSocketClock extends React.Component {

   /*  THIS IS THE SIMPLE SETUP    
   // instance of websocket connection as a class property
      ws = new WebSocket('ws://localhost:8080/ws')
   
      componentDidMount() {
         this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
         }
   
         this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
   
            console.log('[WS] json post event!', evt)
            const message = evt.data
            this.setState({ dataFromServer: message })
            console.log('[WS] message=', message)
         }
         this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
   
         }
    */

   constructor(props) {
      super(props)
      console.log('[WEBSOCKET] props:', props)
      this.state = {
         ws: null
      }
   }
   // single websocket instance for the own application and constantly trying to reconnect.
   componentDidMount() {
      this.connect();
   }

   timeout = 250; // Initial timeout duration as a class variable

   /**
    * @function connect
    * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
    * Un end-point WebSocket è rappresentato da URI nel seguente formato:ws://host:port/path?query
wss://host:port/path?query
Lo schema ws rappresenta le comunicazioni in chiaro mentre lo schema wss rapresenta le comunicazioni criptate. La porta è un dato facoltativo, si consideri che per le comunicazioni in chiaro si usa la porta 80 mentre per le comunicazione criptate la 443, analogamente al protocollo l’http. La componente path rappresenta il path del server dove si trova l’end-point e la parte query è opzionale.
    */
   connect = () => {
      var ws = new WebSocket("ws://localhost:8080/ws");
      let that = this; // cache the this
      var connectInterval;

      // websocket onopen event listener
      ws.onopen = () => {
         console.log("[WEBSOCKET] CLIENT connected main component");

         this.setState({ ws: ws });

         that.timeout = 250;              // reset timer to 250 on open of websocket connection 
         clearTimeout(connectInterval);   // clear Interval on open of websocket connection
      }

      ws.onmessage = evt => {
         // listen to data sent from the websocket server
         // console.log('[WEBSOCKET] CLIENT json post event!', evt)
         const message = evt.data
         this.setState({ dataFromServer: message })
         console.log('[WEBSOCKET] CLIENT message=', message)
         // console.log('state.=', this.state)
         if (this.props.running) {
            this.props.onChange(clockStates.COMPLETED, 1, 'WINNER FROM CLOCK Action Called');
         } else console.log('NIENTE CAMBIO DI STATO perchè this.props.running:',this.props.running)
      }
      // websocket onclose event listener
      ws.onclose = e => {
         console.log(
            `[WEBSOCKET] CLIENT Socket is closed. Reconnect will be attempted in ${Math.min(
               10000 / 1000,
               (that.timeout + that.timeout) / 1000
            )} second.`,
            e.reason
         );

         that.timeout = that.timeout + that.timeout //increment retry interval
         connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)) //call check function after timeout
      }

      // websocket onerror event listener
      ws.onerror = err => {
         console.error(
            "[WEBSOCKET] CLIENT Socket encountered error: ",
            err.message,
            "[WEBSOCKET] CLIENT Closing socket"
         );

         ws.close()
      }
   }

   //  utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   check = () => {
      const { ws } = this.state;
      if (!ws || ws.readyState === WebSocket.CLOSED) this.connect();//check if websocket instance is closed, if so call `connect` function.
   }

   render() {
      return (
         // this.props.running &&
         <div >
            <WinnerAuction onChange={this.props.onChange} clkState={this.props.clkState} websocket={this.state.dataFromServer} />
         </div>
      )
   }
}
export default WebSocketClock