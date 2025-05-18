const Expense=require('../models/expense-model.js')
const{validationResult}=require('express-validator')

const expenseCltr={};
expenseCltr.list=(req,res)=>{
    Expense.find()
    .then((expense)=>{
        res.json(expense);
    })
    .catch((err)=>{
        res.status(500).json({errors:'something went wrong'});
    })

};
expenseCltr.create=(req,res)=>{
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() })
        }
    const body=req.body
    Expense.create(body)
    .then((expense)=>{
        res.status(201).json(expense)
    })
    .catch((err)=>{
        res.stauts(400).json(err)
    })
   };
   expenseCltr.put=(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() })
    }
    const id=req.params.id
    const body=req.body
    Expense.findByIdAndUpdate(id,body,{new:true})
    .then((expense)=>{
        if(!expense){
            return res.status(404).json({error:'expense not found'})
        }
        res.json(expense)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })

   };
   expenseCltr.delete=(req,res)=>{
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() })
        }
    const id=req.params.id
    Expense.findByIdAndDelete(id)
    .then((expense)=>{
        if(!expense){
            return res.status(404).json({error:'expense not found'})
        }
        res.json(expense)
    })
    .catch((err)=>{
        res.json(err)
    })
   };
   expenseCltr.get=(req,res)=>{
    const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() })
        }
    const id=req.params.id
    Expense.findById(id)
    .then((expense)=>{
        if(!expense){
            return res.status(404).json({error:'expense not found'})
        }
        res.json(expense)
    })
    .catch((err)=>{
        res.stauts(500).json(err)
    })

   }

module.exports=expenseCltr;