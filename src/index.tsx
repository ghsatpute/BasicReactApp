import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Title from './title';
import CustomDate from './custom-date';
import ColorLoops from './color-loops';
import Rectangle from './rectangle';

ReactDOM.render(
    <div>
        <Title text="This is dynamic text" />
        <CustomDate />
        <ColorLoops />
        <Rectangle />

        <h1>This is React Website</h1>
    </div>,
    document.querySelector('#root')
)
