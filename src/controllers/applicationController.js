const pool = require('../db');
//GET METODU
exports.getApplication=async (req,res)=>{
  try{
    //pagination
    const {limit=10,offset=0}=req.query; // kullanıcı ? den sonra bir şey yazmazsa sabit değerler yazarsa yazdığı değerler geçerli
    const limitNum = parseInt(limit)||10; //string geldikleri için numbera çevirdik
    const offsetNum = parseInt(offset)||0;
    
    const result = await pool.query(
    'SELECT * FROM applications ORDER BY id LIMIT $1 OFFSET $2',
  [limitNum,offsetNum]);

  res.status(200).json(result.rows);
  }
  catch{
    res.status(500).json({error:"server error"});
  }
   
    
}
//POST METODU
exports.createApplication=async (req,res)=>{
    const {name} =req.body;

    const result = await pool.query(
    'INSERT INTO applications (name) VALUES ($1) RETURNING id,name',
    [name]
  );

  res.status(201).json(result.rows[0]);
}

exports.getApplicationById=async (req,res)=>{
  const id=parseInt(req.params.id);

  const result=await pool.query(
    'SELECT * FROM applications WHERE id=$1',[id]);
  
  if(result.rows.length===0){
    return res.status(404).send('application not found');
  }
  else{
    return res.json(result.rows[0]);
  }
}
//DELETE METODU
exports.deleteApplication=async(req,res)=>{
  const id=parseInt(req.params.id);
  
  const result=await pool.query(
    'DELETE FROM applications WHERE id=$1 RETURNING id,name',[id]);

  if(result.rowCount===0){
    return res.status(404).send("Application not found");
  }
  
  res.status(200).json(result.rows[0]);

}
//PUT METODU
exports.updateApplication=async(req,res)=>{
  const id=parseInt(req.params.id);
  const {name}=req.body;

  const result= await pool.query(
    'UPDATE applications SET name=$1 WHERE id=$2 RETURNING id,name',
    [name,id]
  )
  if(result.rowCount===0){
    return res.status(404).send("application not found");
  }
  res.status(200).json(result.rows[0]);
}
