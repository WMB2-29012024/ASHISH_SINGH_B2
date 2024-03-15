

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
 const num = 18;

function binaryConverstion(num) {
const stack = new Stack(num);
while(num> 0){
    const rem  = num%2
    stack.stackPush(rem);
    num = Math.floor(num/2)
}
while(!stack.isEmpty()){
    ans += stack.stackPop()
    
}
return ans
}
console.log(binaryConverstion(num))