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
       //Case 2 deleting node with just one child
      }else if(value==root.data && root.right !== null && root.left==null){
        let tempRoot=root.right;
        root=null;
        return tempRoot;
      }else if(value==root.data && root.right == null && root.left !==null){
        let tempRoot=root.left;
        root=null;
        return tempRoot;
        //case 3 deleting node with 2 childs
      }else if(value==root.data && root.right!== null & root.left !== null){
        let successor = root.right;
        if (successor.left !== null) {
            while (successor.left !== null) {
                successor = successor.left;
            }
            root.data = successor.data;
            root.right = this.delete(successor.data, root.right);
        } else {
            // If the successor has no left child, simply replace the root's data
            root.data = successor.data;
            root.right = this.delete(successor.data, root.right);
        }
        return root;
      }
      return root;     
    }
    find(value,root=this.root){
      if(root==null){
        return "No value found"
      }else if(value == root.data){
        return console.log(root)
      }else if(value>root.data){
        return this.find(value,root.right)
      }else if(value< root.data){
        return this.find(value,root.left)
      }
      
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
let array=[20,30,32,34,36,40,50,60,65,70,75,80,85]
let tree=new Tree(array)
tree.insert(1);
tree.delete(34);
tree.delete(36)
console.log(tree.find(50));


prettyPrint(tree.root)
