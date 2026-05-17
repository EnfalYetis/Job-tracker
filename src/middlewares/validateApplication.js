exports.validateApplicationName=(req,res,next)=>{
    const {name}=req.body;

    if (!name || typeof name !== 'string'){
         return next(new AppError("Geçersiz isim", 400));
    }
    if (!name.trim()) {
        return next(new AppError("Name boş olamaz", 400));
    }

    if (name.length < 2) {
        return next(new AppError("Minimum 2 karakter", 400));
    }

    next();
}
exports.validateId=(req,res,next)=>{

    const id=parseInt(req.params.id);

    if (isNaN(id) || id <= 0){
         return next(new AppError("Geçersiz id", 400));
    }
    next();
}