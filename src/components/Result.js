import React from 'react'

export default function Result(props) {
    return (
        <div style={styles.resultStyle}>
            {
                props.weather === "err"?
                <h2>Please make sure the city name is correct</h2>
                : <h2>Hmmm, the condition seems to be:  {props.weather}</h2>
            }
        </div>
    )
}

const styles = {
    resultStyle: {
        textAlign: 'center',
        color: 'white',
    }
}