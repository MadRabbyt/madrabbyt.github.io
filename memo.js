document.body.innerHTML='<div id="memo-board">memo-board-div</div>';
let memoBoard = document.getElementById("memo-board");
// make a table, even*even or even*odd
// lets take n=4, then m=16, 8 pairs
let n = 4;
let m = n * n;
let p = m / 2;
let inrow = [];
let nums = [];
for (let i = 0; i < m; i += 1) {inrow.push(0); nums.push(i);}
let pair1 = 0;
for (let i = 0; i < p; i += 1) {
  pair1 = Math.floor(Math.random()*nums.length);
  inrow[nums[pair1]] = i;
  nums.splice(pair1, 1);
  pair1 = Math.floor(Math.random()*nums.length);
  inrow[nums[pair1]] = i;
  nums.splice(pair1, 1);
}
let game = [];
let row = [];
pair1 = 0;
for(let i = 0; i < n; i += 1) {
  row = [];
  for(let j = 0; j < n; j += 1) {
//    row.push(Math.floor(Math.random()*m));
    row.push(inrow[pair1]);
    pair1 += 1;
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
