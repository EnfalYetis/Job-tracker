exports.validateApplicationName=(req,res,next)=>{
    const {name}=req.body;

    if (!name || typeof name !== 'string' || name.trim().length < 2){
        return res.status(400).json({error:"geçersiz isim"})
    }

    next();
}
exports.validateId=(req,res,next)=>{
    const id=parseInt(req.params.id);

    if (isNaN(id) || id <= 0){
        return res.status(400).json({error:"geçersiz id"})
    }
    next();
}