const pool = require('../db');
const applicationService = require('../services/applicationService');

//GET METODU
exports.getApplication=async (req,res)=>{
  try{
    //pagination
    const {limit=10,offset=0}=req.query; // kullanıcı ? den sonra bir şey yazmazsa sabit değerler yazarsa yazdığı değerler geçerli
    const limitNum = parseInt(limit)||10; //string geldikleri için numbera çevirdik
    const offsetNum = parseInt(offset)||0;
    
    const result=await applicationService.getApplications(limitNum,offsetNum);

    res.status(200).json(result);
    }
  catch{
    res.status(500).json({error:"server error"});
  }
   
    
}
//POST METODU
exports.createApplication=async (req,res)=>{
    const {name} =req.body;
    const result=await applicationService.createApplication(name);

    res.status(201).json(result);
}

exports.getApplicationById=async (req,res)=>{
  const id=parseInt(req.params.id);
  
  const result=await applicationService.getApplicationById(id);

  if(!result){
    return res.status(404).send('application not found');
  }
    return res.json(result);
  
}
//DELETE METODU
exports.deleteApplication=async(req,res)=>{
  const id=parseInt(req.params.id);
  const result=await applicationService.deleteApplication(id);

  if(!result){
    return res.status(404).send("Application not found");
  }
  res.status(200).json(result);

}
//PUT METODU
exports.updateApplication=async(req,res)=>{
  const id=parseInt(req.params.id);
  const {name}=req.body;

  const result=await applicationService.updateApplication({id,name});

  if(!result){
    return res.status(404).send("application not found");
  }
  res.status(200).json(result);
}
