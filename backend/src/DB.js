const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'naprendszer',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
