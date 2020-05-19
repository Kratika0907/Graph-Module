Graph Module 

A graph module which provides easy to use api to create directed unweighted graph data structure and perform traversals 

Features 

createGraph -> API to create graph
performDFS(start,end) -> API to perform Depth First Search on graph 
performBFS(start, end) -> API to perfrom Breadth First Search om graph

How to use 

Create a new instance for graph class and pass number of vertices 
let myGraph = new Graph(5); 

Pass 2-D array which consist of edges information 
let arr = [[0,1], [1,3], [1,4]]
myGraph.createGraph(arr);

Perform DFS on graph 
myGraph.perfromDFS() -> perform DFS on whole graph 
myGraph.performDFS(1,4) -> perfrom DFS from starting vertex to end vertex

Perform BFS on graph 
myGraph.performBFS() -> perform BFS omn whole graph
myGraph.performBFS(start,end) -> perfrom BFS from starting vertex to end vertex



