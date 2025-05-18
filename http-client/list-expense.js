const axios=require("axios")
 async function listExpense(){
    try{
    const response=await axios.get("http://localhost:3035/all-expense")
    console.log(response.data)
    }catch(err){
        console.log(err)
    }
 }
 listExpense()


