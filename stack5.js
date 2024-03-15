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
const input = [4, 5, 2, 25]

function nextGeaterElement(input){
     const stack = new Stack(input.length)
     const ans = [...input]
     for(let i = input.length-1; i>=0; i--){
        const element = input[i]
       while(!stack.isEmpty() && element>stack.peek()){
        stack.stackPop()

       }
       ans[i] = stack.isEmpty() ? -1 :stack.peek();
        stack.stackPush(element)
    }
    return ans;

}
console.log(nextGeaterElement(input))
