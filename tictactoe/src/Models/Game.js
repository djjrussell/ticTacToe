import React from 'react';
import {Board} from './Board';
import {checkHorizontal} from './../checks/horizontal';
import {checkVertical} from './../checks/horizontal';
import {checkDiagonal} from './../checks/horizontal';

export class Game extends React.Component {

    constructor() {
        super();

        this.state = {
            previousMarker: "O",
            marker: "X"
        };

        this.handleClick = this.handleClick.bind(this);

    }

    markTile(e) {

        const tile = e.target;

        if (tile.dataset.marked === "true") {
            alert("This spot is taken");
            return;
        }

        tile.innerHTML = this.state.marker;
        tile.dataset.marked = "true";
        tile.dataset.owner = this.state.marker;

        const didWin = this.didWin(e);

        if(didWin){

            setTimeout(() => {
                alert(this.state.previousMarker + " Wins!!!");
                window.location = window.location;
            }, 200);

        }

    }

    didWin(e) {
        const tile = e.target;

        return checkHorizontal(tile) || checkVertical(tile) || checkDiagonal(tile)

    };

    handleClick(e) {

        this.markTile(e);

        this.setState({
            previousMarker: this.state.marker,
            marker: this.state.marker === "X" ? "O" : "X",
        });

    }

    render() {

        return (<Board
            marker={this.state.marker}
            won={this.state.won}
            onClick={this.handleClick}
        />);

    }

}