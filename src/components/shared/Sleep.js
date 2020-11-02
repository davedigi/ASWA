import React from 'react'

// <Sleep show={true} totMs=20000 interval=1000 />
export const Sleep = (props) => {
    const [sleeper, setSleeper] = React.useState(new Date())

    function FormattedDate(props) {
        return (
            <h2>{new Date().toLocaleTimeString()}</h2>
        )
    }

    React.useEffect(() => {
        const timer = setInterval(() => {
            setSleeper((Data) => (new Date()))
        }, props.interval);
        console.log("[SLEEP] totale/lap/interval:", props.totMs, timer, props.interval)
        if (timer > props.totMs) { //TODO questa cosa è sbagliata - DG
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer);
        }
    }, [sleeper])

    return (
        <>
            {props.show ?
                <FormattedDate {...sleeper} />
                : null
            }
        </>
    )
}
// setInterval(Tick, 1000)
export default Sleep