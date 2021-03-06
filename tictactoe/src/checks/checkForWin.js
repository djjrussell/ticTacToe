export const checkHorizontal = (tile) => {

    const marker = tile.dataset.owner;
    const row = tile.dataset.row;
    const board = tile.parentElement;

    const possible = board.querySelectorAll(".tile[data-owner='"+marker+"'][data-row='"+row+"']");

    if(possible.length === 3){
        return true;
    }
    return false;
};

export const checkVertical = (tile) => {
    const marker = tile.dataset.owner;
    const col = tile.dataset.col;
    const board = tile.parentElement;

    const possible = board.querySelectorAll(".tile[data-owner='"+marker+"'][data-col='"+col+"']");

    if(possible.length === 3){
        return true;
    }
    return false;
};

export const checkDiagonal = (tile) => {
    const marker = tile.dataset.owner;

    const board = tile.parentElement;

    return((
           board.querySelector(".tile[data-col='1'][data-row='1'][data-owner='"+marker+"']") &&
           board.querySelector(".tile[data-col='2'][data-row='2'][data-owner='"+marker+"']") &&
           board.querySelector(".tile[data-col='3'][data-row='3'][data-owner='"+marker+"']")
           ) || (
           board.querySelector(".tile[data-col='1'][data-row='3'][data-owner='"+marker+"']") &&
           board.querySelector(".tile[data-col='2'][data-row='2'][data-owner='"+marker+"']") &&
           board.querySelector(".tile[data-col='3'][data-row='1'][data-owner='"+marker+"']")
       ))    ;

};