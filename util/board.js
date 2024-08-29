import { Cell } from "./cell";
export class Board {
    constructor(rows, cols, mines) {
        this.rows = rows;
        this.cols = cols;
        this.mines = mines;
        this.grid = [];
        this.isWon = false;
        this.isLost = false;
        this.generateBoard();
        this.placeMines(0, 0);
        this.calculateAdjMines();
    }

    generateBoard() {
        for(let i = 0; i< this.rows; i++)
        {
            this.grid[i] = [];
            for(let j=0; j<this.cols; j++)
            {
                this.grid[i][j] = new Cell(i, j);
            }
        }
    }

    placeMines(row, col) {
        let minesPlaced = 0;
        while(minesPlaced < this.mines) {
            const randRow = Math.floor(Math.random() * this.rows);
            const randCol = Math.floor(Math.random() * this.cols);
            if((!this.grid[randRow][randCol].isMine)&&(row!=randRow)&&(col!=randCol)) {
                this.grid[randRow][randCol].isMine = true;
                minesPlaced++;
            }
        }
    }

    calculateAdjMines() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (!this.grid[i][j].isMine) {
                    this.grid[i][j].adjacentMines = this.countAdjacentMines(i, j);
                }
            }
        }
    }

    countAdjacentMines(row, col) {
        let count = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < this.rows && j >= 0 && j < this.cols && this.grid[i][j].isMine) {
                    count++;
                }
            }
        }
        return count;
    }

    revealCell(row, col) {
        if (!this.grid[row][col].isRevealed && !this.grid[row][col].isFlagged) {
            this.grid[row][col].reveal();
            if (this.grid[row][col].adjacentMines === 0) {
                this.revealAdjacentCells(row, col);
            }
            if (this.grid[row][col].isMine) {
                this.revealAllMines();
                console.log("Game Loss!")
                this.isLost = true;
            } else if(this.checkWinCondition()) {
                this.revealAllMines();
                console.log("Game Won!")
                this.isWon = true;
            }
        }
    }

    revealAdjacentCells(row, col) {
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < this.rows && j >= 0 && j < this.cols) {
                    this.revealCell(i, j);
                }
            }
        }
    }

    toggleFlag(row, col) {
        if (!this.grid[row][col].isRevealed) {
            this.grid[row][col].toggleFlag();
        }
    }

    checkWinCondition() {
        let remainingCells = this.rows * this.cols - this.mines;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j].isRevealed) {
                    remainingCells--;
                }
            }
        }
        if (remainingCells === 0) {
            return true;
        }
        else return false;
    }

    revealAllMines() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j].isMine) {
                    this.grid[i][j].reveal();
                }
            }
        }
    }

    printBoard() {
        for (let i = 0; i < this.rows; i++) {
            let s = "";
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j].isMine) {
                    s+="* ";
                }
                else {
                    s+=this.grid[i][j].adjacentMines;
                    s+=" "
                }
            }
            console.log(s)
        }
    }
}