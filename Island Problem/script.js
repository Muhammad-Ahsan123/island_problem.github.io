// let grid = [
//   [1, 1, 1, 1, 0, 0, 0, 0] ,
//   [0, 0, 1, 1, 1, 1, 0, 0] ,
//   [1, 1, 1, 1, 0, 0, 0, 0] ,
//   [0, 0, 0, 0, 0, 0, 0, 0] ,
// ]
// let numIslands = function (grid) {
//   let count = 0

//   for (let i = 0; i < grid.length ; i++) {
//     for (let j = 0; j < grid[i].length ; j++) {
//       if (grid[i][j] === "1") {
//         count++;
//         dfs(grid, i, j);
//       }
//     }
//   }
// function dfs(grid, i, j) {

//   if (i < 0 || i > grid.length || j < 0 || j > grid[i].length || grid[i][j] === "0" ) {
//       return;
//      }

//   grid[i][j] = "0" ;

//   dfs(grid, i + 1, j);
//   dfs(grid, i - 1, j);
//   dfs(grid, i, j + 1);
//   dfs(grid, i, j - 1);
// }

//   return 1 ;
// };
// console.log(numIslands(grid));













// let grid = [
//   [1, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 1, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ];

// let numIslands = function (grid) {
//   let count = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         count++;
//         dfs(grid, i, j);
//       }
//     }
//   }

//   function dfs(grid, i, j) {
//     if (i < 0 || i > grid.length || j < 0 || j > grid[i].length || grid[i][j] === 0) {
//       return;
//     }

//     grid[i][j] = 0;

//     dfs(grid, i + 1, j);
//     dfs(grid, i - 1, j);
//     dfs(grid, i, j + 1);
//     dfs(grid, i, j - 1);
//   }

//   return count;
// };

// console.log(numIslands(grid)); // Output should be the number of islands
















// let grid = [
//   [ "1" , "1" , "1" , "1" , "0" ] ,
//   [ "1" , "1" , "0" , "1" , "0" ] ,
//   [ "1" , "1" , "0" , "0" , "0" ] ,
//   [ "0" , "0" , "0" , "0" , "0" ] 
// ]
// let numIslands = function (grid) {
//   let count = 0

//   for (let i = 0; i < grid.length ; i++) {
//     for (let j = 0; j < grid[i].length ; j++) {
//       if (grid[i][j] === "1") {
//         count++;
//         dfs(grid, i, j);
//       }
//     }
//   }
// function dfs(grid, i, j) {

//   if (i < 0 || i > grid.length-1 || j < 0 || j > grid[i].length-1 || grid[i][j] === "0" ) {
//       return;
//      }

//   grid[i][j] = "0" 

//   dfs(grid, i + 1, j);
//   dfs(grid, i - 1, j);
//   dfs(grid, i, j + 1);
//   dfs(grid, i, j - 1);
// }

//   return count ;
// };
// console.log(numIslands(grid));

















let grid = [
    [ "1" , "1" , "0" , "0" , "1" ] ,
    [ "1" , "1" , "0" , "0" , "0" ] ,
    [ "0" , "0" , "1" , "0" , "0" ] ,
    [ "1" , "0" , "1" , "0" , "1" ] 
  ]
  let numIslands = function (grid) {
    let count = 0
  
    for (let i = 0; i < grid.length ; i++) {
      for (let j = 0; j < grid[i].length ; j++) {
        if (grid[i][j] === "1") {
          count++;
          dfs(grid, i, j);
        }
      }
    }
  function dfs(grid, i, j) {
  
    if (i < 0 || i > grid.length-1 || j < 0 || j > grid[i].length-1 || grid[i][j] === "0" ) {
        return;
       }
  
    grid[i][j] = "0" 
  
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }
  
    return count ;
  };
  console.log(numIslands(grid));
  