const InputItem  =({ placeholder , inputId , type}) =>{
   
    return(
        <div className="card-container2">
           <label htmlFor={inputId}>{placeholder}</label>
            <input type={type} name=""  id={inputId} placeholder={placeholder}></input>  
            </div>    
    
    )
}
export default InputItem;