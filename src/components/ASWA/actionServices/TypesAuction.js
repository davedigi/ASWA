
export const watchStates = {
   IDLE: "IDLE",
   UP: "UP",
   START: "START",
   COMPLETED: "COMPLETED"
}

export interface IWatchStates {
   Label?: string;
   State: watchStates;
}

// class Demo extends React.Component<IWatchStates> {}

// let d = <Demo State={State.START} />