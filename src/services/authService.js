const userRepository=require('../repositories/userRepository');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.createUser=async(email,password)=>{
    const user=await userRepository.getUserByEmail(email);

    if(user){
        throw new Error("Böyle bir kullanıcı zaten var");
    }

    const hashedPassword=await bcrypt.hash(password,10);

    return await userRepository.createUser(email,hashedPassword);
}
exports.loginUser=async(email,password)=>{

    const user=await userRepository.getUserByEmail(email);

    if(!user){
        throw new Error("Böyle bir email kayıtlı değil");
    }
    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error("Şifre Yanlış!");
    }
    const payload={
        "id":user.id,
        "email":user.email
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET);

    return token;
    
}