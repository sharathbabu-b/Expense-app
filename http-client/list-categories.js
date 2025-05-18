const axios =require("axios")
const { response } = require("express")
async function ListCategories(){
    try{
        const response=await axios.get("http://localhost:3035/all-categories")
        console.log(response.data)
        response.data.forEach((ele)=>{
           console.log(ele.name)
        })
    }catch(err){
        console.log(err)

    }
}
ListCategories()