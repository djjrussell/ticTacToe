import React from 'react';
import {Tile} from "./Tile"

export class Board extends React.Component {

    render(){
        return (
           <div>
            <Tile/>
            <Tile/>
            <Tile/>
            <br />
            <Tile/>
            <Tile/>
            <Tile/>
            <br />
            <Tile/>
            <Tile/>
            <Tile/>
           </div>
        );
    }

}