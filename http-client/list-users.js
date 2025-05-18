const axios=require("axios")
async function listUsers(){
    try{
        const response=await axios.get("http://jsonplaceholder.typicode.com/users")
        console.log(response.data)    
        response.data.forEach((ele)=>
            console.log(ele.name)
    )
    }catch(err){
        console.log(err)
    }

}
listUsers()
    
