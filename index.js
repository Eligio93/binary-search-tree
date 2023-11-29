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

    insert(value,root=this.root){      
      if(root==null){
       return new Node(value);
      }else{
        if(value<root.data){       
         root.left=this.insert(value,root.left);
        }else if(value>root.data){
          root.right=this.insert(value,root.right);
        }        
        return root;        
      }           
    }
    delete(value,root=this.root) {
      if (root === null) {
        return root;
      }
      //Case 1 deleting a leaf node
      if (value<root.data) {
        root.left = this.delete(value,root.left);
      } else if (value > root.data) {
        root.right = this.delete(value,root.right);
      }else if(value==root.data && root.right==null && root.left==null){       
       return null;
      }
      
      return root;
     
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
let array=[2,3,4,5,6,7,8,9]
let tree=new Tree(array)
tree.insert(1);
tree.delete(9);
tree.delete(7);
prettyPrint(tree.root)
