import React from 'react';
import { Tile } from "./Tile"

export const Board = (props) => {
    return (
        <div className="board">
            <Tile onClick={props.onClick} marker={props.marker}/>
            <Tile onClick={props.onClick} marker={props.marker}/>
            <Tile onClick={props.onClick} marker={props.marker}/>
            <br />
            <Tile onClick={props.onClick} marker={props.marker}/>
            <Tile onClick={props.onClick} marker={props.marker}/>
            <Tile onClick={props.onClick} marker={props.marker}/>
            <br />
            <Tile onClick={props.onClick} marker={props.marker} />
            <Tile onClick={props.onClick} marker={props.marker}/>
            <Tile onClick={props.onClick} marker={props.marker}/>
        </div>
    );
}