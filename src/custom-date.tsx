import * as React from 'react';

function CustomDate() {
    let [time, setTime] = React.useState("");

    let getTime = () => {
        setTime(new Date().toTimeString());
    }

    return (
        <div>
            {time}
            &nbsp;
            <button onClick={getTime}> Get the time</button>
        </div>
    )
}

CustomDate.displayName = "CustomDate";

export default CustomDate; 
