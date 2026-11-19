const express = require('express');
const mysql = require('mysql2/promise');
const port = 3000
const app = express()
 
app.use(express.json())
 
app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})
 
const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'naprendszer',
    port: '3307'
})
 
app.get('/bolygok', async(req, res) =>{
    const [rows] = await dbpool.query(
        'SELECT * FROM bolygok'
    )
    try {
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).send("Adatok elérése sikertelen")
    }
    
})
 
app.delete('/torles', async(req, res)=>{
    
    try {
       const [rows] = await dbpool.query(
        'DELETE FROM bolygok WHERE id = ?'
    ) 
    } catch (error) {
        res.status(404).send("nincs ilyen bolygó")
    }
})