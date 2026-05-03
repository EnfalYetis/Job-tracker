const pool = require('../db');

exports.getApplication=async (req,res)=>{
    const result = await pool.query('SELECT * FROM applications');
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
