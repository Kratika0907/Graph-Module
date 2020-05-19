class Graph {

    constructor(vertices) {
        this.vertices = vertices;
        this.adjacencyMatrix = Array(vertices).fill(0).map(x => Array(vertices).fill(0));
    }

    createDirectedLink(edge) {
        this.adjacencyMatrix[edge[0]][edge[1]] = 1;
    }

    createGraph(arr) {
        for (let i = 0; i < arr.length; ++i) {
            let edge = arr[i];
            this.createDirectedLink(edge);

        }
    }

    performBFS(start = 0, end = undefined) {
        let visited = new Array(this.vertices).fill(0);
        let path = [];
        let queue = [];
        queue.push(this.adjacencyMatrix[start]);
        visited[start] = 1;
        path.push(start)
        while (queue.length) {
            let node = queue.shift(); // node is an array
            for (let i = 0; i < node.length; ++i) {
                if (node[i] == 1 && i == end && !visited[i]) {
                    path.push(i);
                    break;
                }
                if (node[i] == 1 && !visited[i]) {
                    // there is a path from that node 
                    queue.push(this.adjacencyMatrix[i]);
                    path.push(i);
                    visited[i] = 1;
                }
            }
        }
        return path;

    }



    performDFS(start = 0, end = undefined) {
        let visited = new Array(this.vertices).fill(0);
        let path = [];
        let stack = [];
        stack.push(this.adjacencyMatrix[start]);
        path.push(start);
        visited[start] = 1;
        while (stack.length) {
            let node = stack.pop();
            for (let i = 0; i < node.length; ++i) {
                if (node[i] == 1 && !visited[i] && i == end) {
                    path.push(i);
                    return path;
                }
                if (node[i] == 1 && !visited[i]) {
                    stack.push(this.adjacencyMatrix[i]);
                    visited[i] = 1;
                    path.push(i);
                    break;
                }
            }
        }

        return path;




    }
}

module.exports = Graph;