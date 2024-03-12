
class Stack {
    constructor(size) {
        this.stack = []
        this.maxSize = size
        this.stackSize = 0
    }
    peek(){
        // return the last element
        // without removing it form stack
        if(this.stackSize === 0){
            return "Stack is empty"
        }else {
            const lastElem = this.stackPop()
            this.stackPush(lastElem)
            return lastElem
        }
    }
    isEmpty () {
        // return this.stackSize === 0 ? true : false
        if (this.stackSize === 0){
            return true
        }
        return false   
    }
    stackPush(item) {
        // watching for stack overflow issue
        if(this.stackSize>= this.maxSize){
            return new Error("Stack Overflow")
        }
        this.stack.push(item)
        this.stackSize += 1
        return this.stackSize
    }
    stackPop(){
        // watching for stack underflow issue
        if(this.stackSize === 0){
            return new Error("Stack Underflow")
        }
        this.removedItem = this.stack.pop()
        this.stackSize -=1
        return this.removedItem
    }
}
const s = "{[()]}";
 isValidParantheses=(s) =>{
const stack = new Stack(s.length);
for(let i=0; i<s.length; i++){
 const currentChar = s.charAt(i);
 if(currentChar === '[' || currentChar ==='(' || currentChar ==='{'){
    stack.stackPush(currentChar);
 }else{
        const peekElement = stack.peek();
        if(!stack.isEmpty() && ((currentChar ===']' && peekElement === '[')||
        (currentChar === ')' && peekElement === '(') || (currentChar === '}' && peekElement === '{'))) {
        stack.stackPop()
    }else{
    return false;
     }
    }
    console.log({stack})
 }
 return stack.isEmpty()
}
console.log(isValidParantheses(s))

