const db=require('mysql2/promise')


const pool=db.createPool({
    database:process.env.DB_DATABASE,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    connectionLimit:10
})



module.exports=pool;