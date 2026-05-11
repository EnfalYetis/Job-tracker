exports.getApplications=async(limitNum,offsetNum)=>{
   const result= await pool.query(
    'SELECT * FROM applications ORDER BY id LIMIT $1 OFFSET $2',
  [limitNum,offsetNum]);

  return result.rows;
}

exports.getApplicationById=async(id)=>{

    const result=await pool.query(
    'SELECT * FROM applications WHERE id=$1',[id]);

    return result.rows[0];
}

exports.createApplication=async(name)=>{
    const result =await pool.query(
    'INSERT INTO applications (name) VALUES ($1) RETURNING id,name',
    [name]

  );
  return result.rows[0];
}
exports.deleteApplication=async(id)=>{
    const result=await pool.query(
    'DELETE FROM applications WHERE id=$1 RETURNING id,name',[id]);


    return result.rows[0];

}
exports.updateApplication=async(id,name)=>{

    const result=await pool.query(
    'UPDATE applications SET name=$1 WHERE id=$2 RETURNING id,name',
    [name,id]
  )

   return result.rows[0];
}