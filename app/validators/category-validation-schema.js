const Category=require("../models/category-model.js")



const categoryvalidationSchema={
    name:{
        in:['body'],
        exists:{
            errorMessage:'name field is required'
        },
        notEmpty:{
            errorMessage:'name cannot be empty'
        },
        trim:true,
        // isLength:{
        //     options:{min:3,max:25},
        //     errorMessage:'title should be between 3 to 25 Characters'
        // },
        custom:{
            options:async function(value){
                //const category=await Category.findOne({name:{$regex:value,$option:'i'}})
                const category=await Category.findOne({name:value.toLowerCase()})
                if(!category){
                    return true
                }
                throw new Error('category name is already exists try with give new name')
            }
        }
        }
        
    }


module.exports=categoryvalidationSchema