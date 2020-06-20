# Project Title
Graph Module

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

* Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information. 

* BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node). You must then move towards the next-level neighbour nodes. 

* The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected. 




## Getting Started <a name = "getting_started"></a>


### Prerequisites

Javascript enviornment

### Installing

npm i <repo>/Linked-List-Module

## Usage <a name = "usage"></a>

A easy to use graph module which provides api's for directed unweighted graph. The module camn be easily integrated with your existing codebase. To create a Graph object this module provide Graph class through which you camn instantiate your own graph object.

let myGraph = new Graph(5); -- vertex will be from 0 to 4

|Function|Description|
|--------|-----------|
|createGraph|creates the graph from the 2-D matrix|
|--------|-----------|
|perfromDFS(start,end)|peforms the depth first search on the graph|
|--------|-----------|
|perfromBFS(start,end)|peforms the breadth first search on the graph|
|--------|-----------|
|createDirectedLink([vertex1, vertex2])|creates a directed link between the vertex specified|

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

2. End - This is the second argument that you will pass to a function. It denotes the ending vertex where you want to stop the traversal. THis parameter is optional and by default it will cover all the vertices.

3. createDirectedLink()

This function creates a directed link between the vertex specified. It takes a array with start and end vertex between whom you want to have a edge.

Usage
myGraph.createDirectedLink([2,3])











