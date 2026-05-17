const applicationRepository=require('../repositories/applicationRepository.js');
const AppError = require('../utils/AppError');
const {validateId,validateName}=require("../validations/applicationValidation.js");

exports.getApplications=async(limitNum,offsetNum)=>{

  return applicationRepository.getApplications(limitNum,offsetNum)

}
exports.getApplicationById=async(id)=>{

    validateId(id);

    const result = await applicationRepository.getApplicationById(id);

    if (!result) {
        throw new AppError("Application bulunamadı", 404);
    }

    return result
;

}

exports.createApplication=async(name)=>{

    validateName(name);

    return applicationRepository.createApplication(name);

}

exports.deleteApplication=async(id)=>{

    validateId(id);

    const result = await applicationRepository.deleteApplication(id);

    if (!result) {
        throw new AppError("Application bulunamadı", 404);
    }

    return result;

    
    
}

exports.updateApplication=async({id,name})=>{

    validateName(name);
    validateId(id);

    const result = await applicationRepository.updateApplication(id, name);

    if (!result) {
        throw new AppError("Application bulunamadı", 404);
    }

    return result;

  
}