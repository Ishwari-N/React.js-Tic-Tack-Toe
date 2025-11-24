import React from 'react';

const Square = (props) => {
    return (
        <div className='border-2 h-40 w-50 gap-0 flex items-center justify-center' onClick={props.onClick}>
            <h5>{props.value}</h5>
        </div>
    );
};

export default Square;
