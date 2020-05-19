const Graph = require('../src/graph');


let myGraph = new Graph(5);
let arr = [
    [0, 4],
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [3, 1],
    [2, 2]
]
myGraph.createGraph(arr);
console.dir(myGraph.adjacencyMatrix); // gives 2-D matrix representation of graph
console.log(myGraph.performDFS()); // [0 , 1 , 2, 3 , 4]
console.log(myGraph.performDFS(0, 3)); // [0 , 1 , 2 ,3]
console.log(myGraph.performBFS()); // [0 , 1 , 4 , 2 , 3]
console.log(myGraph.performBFS(1, 3)); //[1 , 2 , 3]