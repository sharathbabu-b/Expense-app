const{validationResult}=require('express-validator');
const Category=require('../models/category-model');
const categoriesCltr={};
categoriesCltr.list=async(req,res)=>{
    try{
        const categories=await Category.find();
        res.json(categories);
    }catch(err){
        console.log(err);
        res.status(500).json({errors:'something went wrong'});
    };
};
// categoriesCltr.list=(req,res)=>{
//     Category.find()
//     .then((categories)=>{
//         res.json(categories);
//     })
//     .catch((err)=>{
//         res.status(500).json({errors:'something went wrong'});
//     })
// };
categoriesCltr.create=async(req,res)=>{
    const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    const body=req.body  
    try{
        const category=await Category.create(body);
        res.status(201).json(category)
    }catch(err){
        console.log(err)
        res.status(500).json({errors:'something went wrong'});

    }
};
// categoriesCltr.create=(req,res)=>{
//     const errors=validationResult(req)
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//     const body=req.body;
//     Category.create(body)
//     .then((category)=>{
//         res.status(201).json(category);
//     })
//     .catch((err)=>{
//         res.status(400).json(err)
//     })
//     };

categoriesCltr.show=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id=req.params.id
    try{
        const category=await Category.findById(id);
        if(!category){
            return res.status(404).json({errors:'records not found'})
        }
        res.json(category)
    }catch(err){
        console.log(err)
        res.status(500).json({errors:'something went wrong'});
    };
};
//     categoriesCltr.show=(req,res)=>{
//         const errors=validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array() })
//         }
//     const id=req.params.id;
//     Category.findById(id)
//     .then((category)=>{
//         if(!category){
//             return res.status(404).json({error:'category not found'})
//         }
//         res.json(category)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// };

categoriesCltr.remove=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id=req.params.id
    try{
    const category=await Category.findByIdAndDelete(id)
    if(!category){
        return res.status(404).json({errors:'record not found'});
    }
    res.json(category)
 } catch(err){
        console.log(err)
        res.status(500).json({errors:'something went wrong'});
    }
}
    // categoriesCltr.delete=(req,res)=>{
    //     const id=req.params.id;
    //     Category.findByIdAndDelete(id)
    //      .then((category)=>{
    //         if(!category){
    //             return res.status(404).json({error:'category not found'})
    //         }
    //         res.json(category)
    //     })
    //     .catch((err)=>{
    //         res.json(err)
    //     })
    // }

    categoriesCltr.update=async (req, res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({errors:errors.array()})
        }
        const id=req.params.id
        const body=req.body;
        try{
            const category=await Category.findByIdAndUpdate(id,body,{new:true});
            if(!category){
                return res.status(404).json({errors:'record is not found'})
            }
            res.json(category)
        }catch(err){
            console.log(err)
            res.status(500).json({errors:'something went wrong'});

        }
    };
    // categoriesCltr.update=(req,res)=>{
    //     const id =req.params.id
    //     const body=req.body
    //     Category.findByIdAndUpdate(id,body,{new:true})
    //     .then((category)=>{
    //         if(!category){
    //             return res.status(404).json({error:'category not found'})
    //         }
    //         res.json(category)
    //     })
    //     .catch((err)=>{
    //         res.json(err);
    //     })
    // };
    



module.exports=categoriesCltr;