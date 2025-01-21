import express from 'express'
import mysql from 'mysql2';

const app = express();

const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

const insert = `INSERT INTO people(name) values('Anthony - (Application)')`;
const select = `SELECT * FROM people`;

app.get('/', (req, res) => {
    let tableUsers = '<table><thead><tr><th>#</th><th>Name</th></tr></thead><tbody>';
    
    try {
        connection.query(insert, (error) => {
            if (error) throw error;
        });

        connection.query(select, (error, rows) => {
            if (error) throw error;
    
            for (let row of rows) {
                tableUsers += `<tr><td>${row.id}</td><td>${row.name}</td></tr>`;
            }
    
            tableUsers += '</tbody></table>';
    
            res.send(`<h1>Full Cycle Rocks!!</h1>${tableUsers}`);
        });

    } catch(err) {
        console.log(err);
        connection.end();
    }
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));