const applicationRepository=require('../src/repositories/applcaitonRepository.js');

exports.getApplications=async(limitNum,offsetNum)=>{

  return applicationRepository.getApplications(limitNum,offsetNum)

}
exports.getApplicationById=async(id)=>{

    const result=await applicationRepository.getApplicationById(id);

    if(!result){
        return null;
    }
    return result;

}

exports.createApplication=async(name)=>{

    return applicationRepository.createApplication(name);
}

exports.deleteApplication=async(id)=>{

    const result=await applicationRepository.deleteApplication(id);

    if(!result){
        return null;
    }
    return result;
    
}

exports.updateApplication=async({id,name})=>{

    const result=await applicationRepository.updateApplication(id,name); 

    
    if(!result){

    const error = new Error("Application bulunamadı");
    error.statusCode = 404;
    throw error;
  }
   return result;

  
}