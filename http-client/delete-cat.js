const axios=require("axios")
async function removeCategory(id){
    try{
        const response=await axios.delete(`http://localhost:3035/remove-categories/${id}`)
        console.log(response.data)
    }catch(err){
        console.log(err)

    }
}
    removeCategory('6752a323f721f91a7de38ea3')

