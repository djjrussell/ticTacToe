import React from 'react';
import {Board} from './Board';


let checkHorizontal = (tile) => {

    const needed = 3;
    let have = 1;

    if (
        tile.nextElementSibling &&
        tile.nextElementSibling.dataset.marked === "true" &&
        tile.nextElementSibling.dataset.owner === tile.dataset.owner
    ) {
        have++
    }
    if (
        tile.nextElementSibling &&
        tile.nextElementSibling.nextElementSibling &&
        tile.nextElementSibling.nextElementSibling.dataset.marked === "true" &&
        tile.nextElementSibling.nextElementSibling.dataset.owner === tile.dataset.owner
    ) {
        have++
    }

    if (
        tile.previousElementSibling &&
        tile.previousElementSibling.dataset.marked === "true" &&
        tile.previousElementSibling.dataset.owner === tile.dataset.owner
    ) {
        have++
    }
    if (
        tile.previousElementSibling &&
        tile.previousElementSibling.previousElementSibling &&
        tile.previousElementSibling.previousElementSibling.dataset.marked === "true" &&
        tile.previousElementSibling.previousElementSibling.dataset.owner === tile.dataset.owner
    ) {
        have++
    }

    if (have === needed) {
        return true;
    }

    return false;
};

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
                alert(this.state.marker + " Wins!!!");
            }, 200);

        }

    }

    didWin(e) {
        const tile = e.target;

        if (checkHorizontal(tile)) {
            return true;
        }

        return false;

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