const pool=require('../db');


exports.getAllUsers=async()=>{
    const result=await pool.query('SELECT * FROM users');

    return result.rows;
}
exports.getUserById=async(id)=>{
    const result=await pool.query('SELECT * FROM users WHERE id=$1',[id]);

    return result.rows[0];
}
exports.getUserByEmail=async(email)=>{
    const result=await pool.query('SELECT * FROM users WHERE email=$1',[email]);

    return result.rows[0];
}
exports.createUser=async(email,password)=>{
    const result=await pool.query('INSERT INTO users(email,password) VALUES ($1,$2) RETURNING *',[email,password]);

    return result.rows[0];
}
