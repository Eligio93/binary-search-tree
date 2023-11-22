class Node{
    constructor(data,left=null,right=null){
        this.data=data,
        this.right=right,
        this.left=left
    }
}
class Tree{
   
    constructor(array){
        this.root= this.buildTree(array,0,(array.length)-1);
    }
    buildTree(array,start,end){
        if(start>end){
            return null
        }else{
            let half=Math.round((start+end)/2);        
            this.root=new Node(array[half],this.buildTree(array,start,half-1),this.buildTree(array,half+1,end));    
        }
        return this.root
        
    
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
let array=[1,2,3,4,5]
let tree=new Tree(array)
prettyPrint(tree.root)