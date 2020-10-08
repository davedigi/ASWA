
export const clockStates = {
   IDLE: "IDLE",
   UP: "UP",
   START: "START",
   STOP: "STOP",
   COMPLETED: "WIN",
   CANCELLED:"CANCEL"
}

export interface IClockStates {
   Label?: string;
   State: clockStates;
}

// class Demo extends React.Component<IWatchStates> {}

// let d = <Demo State={State.START} />