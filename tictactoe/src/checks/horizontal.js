export const checkHorizontal = (tile) => {

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