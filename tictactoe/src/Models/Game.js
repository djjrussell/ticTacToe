import React from 'react';
import {Board} from './Board';
import {checkHorizontal} from '../checks/checkForWin';
import {checkVertical} from '../checks/checkForWin';
import {checkDiagonal} from '../checks/checkForWin';

export class Game extends React.Component {

    constructor() {
        super();

        this.state = {
            previousMarker: "O",
            marker: "X",
            totalMarked:0
        };

        this.handleClick = this.handleClick.bind(this);

    }

    markTile(e) {

        const tile = e.target;

        if (tile.dataset.marked === "true") {
            alert("This spot is taken");
            return false;
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

        }else {

            if (this.state.totalMarked == 8){
                alert("WE SUCK!!");
                window.location = window.location;
            }
        }
    }

    didWin(e) {
        const tile = e.target;

        return checkHorizontal(tile) || checkVertical(tile) || checkDiagonal(tile)

    };

    handleClick(e) {
        debugger;
        const tile = e.target;

        if (tile.dataset.marked === "true") {

            alert("This spot is taken");
            return false;

        }else {

            this.setState({
                previousMarker: this.state.marker,
                marker: this.state.marker === "X" ? "O" : "X",
                totalMarked: this.state.totalMarked + 1
            });


            this.markTile(e);

        }
    }

    render() {

        return (<Board
            marker={this.state.marker}
            won={this.state.won}
            onClick={this.handleClick}
        />);

    }

}