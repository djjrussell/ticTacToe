import React from 'react';
import { Tile } from "./Tile"

export const Board = (props) => {
    return (
        <div className="board">
            <Tile col="1" row="3" onClick={props.onClick} marker={props.marker}/>
            <Tile col="2" row="3" onClick={props.onClick} marker={props.marker}/>
            <Tile col="3" row="3" onClick={props.onClick} marker={props.marker}/>
            <br />
            <Tile col="1" row="2" onClick={props.onClick} marker={props.marker}/>
            <Tile col="2" row="2" onClick={props.onClick} marker={props.marker}/>
            <Tile col="3" row="2" onClick={props.onClick} marker={props.marker}/>
            <br />
            <Tile col="1" row="1" onClick={props.onClick} marker={props.marker} />
            <Tile col="2" row="1" onClick={props.onClick} marker={props.marker}/>
            <Tile col="3" row="1" onClick={props.onClick} marker={props.marker}/>
        </div>
    );
}