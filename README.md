Graph Module 


Quick Start 

A easy to use graph module which provides api's for directed unweighted graph. The module camn be easily integrated with your existing codebase. To create a Graph object this module provide Graph class through which you camn instantiate your own graph object.

API Reference 

1. createGraph()

createGraph function creates the graph from the 2-D matrix provided.This function take 2-D matrix as its parameter. 

Parameter 

1. 2-D Matrix - This is the 2-D matrix in which each element denotes the edge between the two vertx. The vertex should be between from the range 0 to the total vertex specified.

Usage 

Pass 2-D array which consist of edges information 
let arr = [[0,1], [1,3], [1,4]];
myGraph.createGraph(arr);

2. perfromDFS()

This function peforms the Depth first search on the graph. It takes two parameters which are optional.

Parameters

1. Start - This is the first argument that you will pass to a function. It denotes the starting vertex from where the graph traversal would start.This parameter is optional and by default it will start from vertex 0

2. End - This is the second argument that you will pass to a function. It denotes the ending vertex where you want to stop the traversal. THis parameter is optional and by default it will cover all the vertex.

Usage

myGraph.perfromDFS() -> perform DFS on whole graph 
myGraph.performDFS(1,4) -> perfrom DFS from starting vertex to end vertex

2. perfromBFS()

This function peforms the Breadth first search on the graph. It takes two parameters which are optional.

Parameters

1. Start - This is the first argument that you will pass to a function. It denotes the starting vertex from where the graph traversal would start.This parameter is optional and by default it will start from vertex 0

2. End - This is the second argument that you will pass to a function. It denotes the ending vertex where you want to stop the traversal. THis parameter is optional and by default it will cover all the vertex.

3. createDirectedLink()

This function creates a directed link between the vertex specified. It takes a array with start and end vertex between whom you want to have a edge.

Usage
myGraph.createDirectedLink([2,3])










