const applicationService = require('../services/applicationService');
const asyncHandler=require("../utils/asyncHandler");

//GET METODU
exports.getApplication=asyncHandler(async (req,res)=>{
  
    //pagination
    const {limit=10,offset=0}=req.query; // kullanıcı ? den sonra bir şey yazmazsa sabit değerler yazarsa yazdığı değerler geçerli
    const limitNum = Number.isNaN(parseInt(limit)) 
    ? 10 
    : parseInt(limit);//string geldikleri için numbera çevirdik
    const offsetNum = Number.isNaN(parseInt(offset)) 
    ? 0 
    :parseInt(offset);
    
    const result=await applicationService.getApplications(
      limitNum,
      offsetNum);
  
    res.status(200).json({
      success:true,
      data:result
    });
  
});
exports.getApplicationById=asyncHandler(async (req,res)=>{
 
  const id=parseInt(req.params.id);
  
  const result=await applicationService.getApplicationById(id);

    return res.json({
      success:true,
      data:result
    });

});
    

//POST METODU
exports.createApplication=asyncHandler(async (req,res)=>{
  

    const {name} =req.body;
    const result=await applicati1onService.createApplication(name);

    res.status(201).json({
      success:true,
      data:result
    });

});

//DELETE METODU
exports.deleteApplication=asyncHandler(async(req,res)=>{

  const id=parseInt(req.params.id);

  const result=await applicationService.deleteApplication(id);

  res.status(200).json({
      success:true,
      data:result
    });
  
});
//PUT METODU
exports.updateApplication=asyncHandler(async(req,res)=>{
  
  const id=parseInt(req.params.id);
  const {name}=req.body;

  const result=await applicationService.updateApplication({
    id,
    name});

  res.status(200).json({
      success:true,
      data:result
    });

});
