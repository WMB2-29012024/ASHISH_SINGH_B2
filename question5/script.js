const inputFile = document.getElementById('imgFile')
const form = document.getElementById("form")
const pElem = document.getElementById("p")

// inputFile.addEventListener('change', (event)=> {
//     pElem.innerHTML =`
//     Name: ${event.target.files[0].name}
//     Size :${Math.round(event.target.files[0].size/100000)}`
//     // console.log(event.target.files[0].size/100000)
// })
inputFile.addEventListener('change',(event) => {
    console.log(event.target.files)
    const fileListMap = []
    for(const file of filesList){
        const filesData = {
            name: file.name

        }
        fileListMap.push(filesData)
    }
    console.log({filesListMap})
})