const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

//database connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Password!11",
    database: "new_schema",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//Sending the user credientials to MySQL database
app.post("/register", (req,res) => {
    const username= req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO LoginSystem (username, password) VALUES (?, ?)", 
    [username, password],
    (err, result) => {
       console.log(err);
    }
   );
   });
//checking if the username password combination is correct or no.
app.post("/login", (req,res) => {
    const username= req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM LoginSystem WHERE username = ? AND password = ?", 
    [username, password],
    (err, result) => {
       if (err) {
           res.send({err:err})
       }
           if (result.length>0) {
               res.send(result)
               ;
           } else {
               res.send({message: "wrong username or password"});
           }
       }
);
    });

//READing the data from database for the admin console
app.get("/api/get", (req,res) => {
    const sqlSelect =
    "SELECT * FROM new_table";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});




//CREATEing new content
app.post("/api/insert", (req,res) => {
    const eng = req.body.eng;
    const ger = req.body.ger;
    const sqlInsert = "INSERT INTO new_table (eng, ger) VALUES (?,?)";
    db.query(sqlInsert,[eng, ger], (err,result)=> {
    console.log(err);
    })

});

//DELETEing the existing content
app.delete("/api/delete/:eng", (req,res)=> {
    const name = req.params.eng
    const sqlDelete=
    "DELETE FROM new_table WHERE eng = ? ";
    db.query(sqlDelete, name, (err, result) => {
       if (err) console.log(err)
    })
});


//UPDATEing the German translation part
app.put("/api/update", (req,res)=> {
    const name = req.body.eng;
    const translate = req.body.ger;
    const sqlUpdate =
    "UPDATE new_table SET ger = ? WHERE eng = ?";
    db.query(sqlUpdate, [translate,name], (err, result) => {
       if (err) console.log(err)
    });
});


app.listen(3001, ()=> {
    console.log("running on port 3001")
});