const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top
  }
  //push -> Adds to the top of the stack
  push(){
    
  }
}

const newStack = new Stack();



class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
