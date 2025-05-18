// import packages
const express=require('express');
const cors =require("cors")
const {checkSchema}=require('express-validator');
// import config files
const configureDB=require('./config/db');
// import controllers
const categoriesCltr=require('./app/controllers/categories-controller');
const expenseCltr=require('./app/controllers/expense-controllers');
// import validators
const categoryvalidationSchema=require('./app/validators/category-validation-schema');
const idValidationSchema=require('./app/validators/id-validation-schema');
const expenseValidationSchema=require('./app/validators/expense-validation-schema');
const app=express();
const port=3035;
app.use(express.json())
app.use(cors())
configureDB();

app.get('/all-categories',categoriesCltr.list);
app.post('/create-categories',checkSchema(categoryvalidationSchema),categoriesCltr.create)
 app.delete('/remove-categories/:id',categoriesCltr.remove);
app.put('/update-categories/:id',checkSchema(categoryvalidationSchema),checkSchema(idValidationSchema),categoriesCltr.update);
app.get('/category/:id',checkSchema(idValidationSchema),categoriesCltr.show);


app.get('/all-expenses',expenseCltr.list)
app.post('/create-expense',checkSchema(expenseValidationSchema),expenseCltr.create);
app.delete('/remove-expense/:id',checkSchema(idValidationSchema),expenseCltr.delete);
app.put('/update-expense/:id',checkSchema(expenseValidationSchema),checkSchema(idValidationSchema),expenseCltr.put);
app.get('/expense/:id',checkSchema(idValidationSchema),expenseCltr.get);



app.listen(port,()=>{
    console.log('server is running on port',port)
});