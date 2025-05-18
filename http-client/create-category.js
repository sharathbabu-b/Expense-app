const axios= require("axios")

// function addCategory(name){
//     const formData={name:name}
//     axios.post("http://localhost:3035/create-categories",formData)
//     .then((response)=>{
//         console.log(response.data);
//     })
//     .catch((err)=>{
//         console.log(err.response.data)
//     })
// }
// addCategory('Games')


// async function 
async function addCategory(name){
    const formData={name:name};
    try{
        const response=await axios.post('http://localhost:3035/create-categories',formData)
        console.log(response.data)
    }catch(err){
        console.log(err.response.data)
    }
}
addCategory("test3");