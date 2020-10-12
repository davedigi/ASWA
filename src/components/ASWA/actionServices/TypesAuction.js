

export const lang={
   it:false,
   en:true
}

export const typeProduct={
   flowers:true,
   fish:false,
   fruits:false
}

export const clockStates = {
   IDLE: "IDLE",
   UP: "UP",
   START: "START",
   STOP: "STOP",
   COMPLETED: "WIN",
   CANCELLED:"CANC"
}

export interface IClockStates {
   Label?: string;
   State: clockStates;
}
// class Demo extends React.Component<IWatchStates> {}
// let d = <Demo State={State.START} />

// clock default configuration
export const clockDefaults = {
   minPrice_perc: 25,
   speed_ms:20,
   tailSize:10   
}

// flowers,fish,fruits clock default configuration
export interface IClockDefaults {
   typeProduct: string;
   default: clockDefaults;
}

