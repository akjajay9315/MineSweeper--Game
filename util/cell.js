
export class Cell{
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.isMine = false;
        this.isRevealed = false;
        this.adjacentMines = 0;
        this.isFlagged = false;
    }
    reveal() {
        this.isRevealed = true;
        this.isFlagged = false;
    }

    toggleFlag() {
        this.isFlagged = !this.isFlagged;
    }
}