import React from 'react';

export const Tile = (props) =>{
    return (
        <div
            data-col={props.col}
            data-row={props.row}
            className="tile"
            onClick={props.onClick}
        />
    );
};
