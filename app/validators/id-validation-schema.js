const idValidationSchema={
    id:{
        in:['params'],
        isMongoId:{
            errorMessage:'id should be a valid mongodb id '
        }
    }
}

module.exports=idValidationSchema;