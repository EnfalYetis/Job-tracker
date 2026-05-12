const AppError = require("../utils/AppError");

exports.validateName=(name)=>{
    if(!name){
        throw new AppError("Name zorunlu",400);
    }

    if(typeof name !=="string"){
        throw new AppError("Name string olmalı",400);
    }
    if(!name.trim()){
        throw new AppError("Name boş olamaz",400);
    }
    if (name.length > 100) {
        throw new AppError("Name çok uzun", 400);
    }
}
exports.validateId = (id) => {

    if (!id) {
        throw new AppError("id zorunlu", 400);
    }

    if (isNaN(id)) {
        throw new AppError("id sayı olmalı", 400);
    }
};
