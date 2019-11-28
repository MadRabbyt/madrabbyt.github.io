document.body.innerHTML='<div id="memo-board">memo-board-div</div>';
let memoBoard = document.getElementById("memo-board");
// make a table, even*even or even*odd
// lets take n=4, then m=16, 8 pairs
let n = 4;
let m = n * n;
let p = m / 2;
let game = [];
let row = [];
for(let i = 0; i < n; i += 1) {
  row = [];
  for(let j = 0; j < n; j += 1) {
    row.push(Math.floor(Math.random()*m));
  }
  game.push(row);
}
let table="<table>";
let trow = "";
for(let i = 0; i < n; i += 1) {
  trow = "<tr>";
  for(let j = 0; j < n; j += 1) {
    trow += "<td>"+game[i][j]+"</td>";
  }
  trow += "</tr>";
  table += trow;
}
memoBoard.innerHTML = table;
