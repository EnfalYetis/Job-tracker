const pool = require('../db');

exports.getApplication=async (req,res)=>{

    const result = await pool.query(
    'SELECT * FROM applications');

    res.json(result.rows);
}

exports.createApplication=async (req,res)=>{
    const {name} =req.body;

    const result = await pool.query(
    'INSERT INTO applications (name) VALUES ($1) RETURNING *',
    [name]
  );

  res.json(result.rows[0]);
}

exports.getApplicationById=async (req,res)=>{
  const id=req.params.id;

  const result=await pool.query(
    'SELECT * FROM applications WHERE id=$1',[id]);

  if(result.rows.length===0){
    return res.status(404).send('application not found');
  }
  else{
    return res.json(result.rows[0]);
  }
}

exports.deleteApplication=async(req,res)=>{
  const id=req.params.id;
  
  const result=await pool.query(
    'DELETE FROM applications WHERE id=$1 RETURNING *',[id]);

  if(result.rowCount===0){
    return res.status(404).send("Application not found");
  }
  
  res.json(result.rows[0]);

}
exports.updateApplication=async(req,res)=>{
  const id=req.params.id;
  const {name}=req.body;

  const result= await pool.query(
    'UPDATE applications SET name=$1 WHERE id=$2 RETURNING *',
    [name,id]
  )
  if(result.rowCount===0){
    return res.status(404).send("application not found");
  }
  res.json(result.rows[0]);
}
