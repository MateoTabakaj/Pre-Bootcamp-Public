import React from 'react';
import Subcontent from './SubContents';
import Advertisement from './Advertisement';
function Main() {
    return (
        <div style={{ backgroundColor: '#e06666', height: '400px',
        width: '700px',
        display: 'inline-block',
        margin: '5px 5px 20px 5px', 
        verticalAlign: 'top'}}>
            {/* Main content goes here */}
            <Subcontent/>
            <Subcontent/>
            <Subcontent/> 
            <Advertisement/>
        </div>
    );
}

export default Main;