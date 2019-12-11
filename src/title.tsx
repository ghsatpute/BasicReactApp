import * as React from 'react'

type titleProps = {
    text: string;
}


function Title(props: titleProps) {
    return (
        <h1 className="primary-header">{props.text}</h1>
    )
}

export default Title;
