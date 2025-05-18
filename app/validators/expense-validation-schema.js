const Expense =require("../models/expense-model.js")
const expenseValidationSchema={
    expenseDate:{
        in:['body'],
        exists:{
            errorMessage:'expense date is required'
        },
        notEmpty:{
            errorMessage:'expense date cannot be empty'
        }

    },
    amount:{
        in:['body'],
        exists:{
            errorMessage:'amount is required'
        },
        notEmpty:{
            errorMessage:'amount cannot be empty'
        },
        isFloat: {
            errorMessage: 'amount should be minimum 1',
            options: { min: 1}
        }
    },
    title:{
        in:['body'],
        exists:{
            errorMessage:'title is required'
        },
        notEmpty:{
            errorMessage:'title cannot be empty'
        }
    },
    category:{
        in:['body'],
        exists:{
            errorMessage:'category is required'
        },
        notEmpty:{
            errorMessage:'category cannot be empty'
        },
        isMongoId: {
            errorMessage: 'category should be a mongodb id'
        }
    }
};
module.exports=expenseValidationSchema