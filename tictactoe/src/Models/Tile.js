import React from 'react';

export class Tile extends React.Component {

    constructor(){
        super();

        this.state = {
          val:undefined
        };

        this.setValueForTile = this.setValueForTile.bind(this);
    }

    setValueForTile(e){
        alert("You Clicked Some shit");
    }

    render(){
        return (
            <div
                className="tile"
                onClick={this.setValueForTile}
            />
        );
    }
}