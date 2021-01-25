const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
// var dateFormat = require('dateformat');

const app = express();
app.set("port", 3001);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "austin",
	password: "astros5",
	database: "cubing"
};

const pool = new Pool(config);

app.post("/api/addtime", cors(), async (req,res) => {
	const name = req.body.name;
	const time = req.body.time;
	// const timeStamp = dateFormat(time, dateFormat.masks.isoDateTime);
	
	const template = 'INSERT INTO times (name,time) VALUES ($1,$2)';
	const response = await pool.query(template, [name,time]);
	
	res.json({name: name, time: time});

});

app.get("/api/list", async (req,res) => {
	const template = await pool.query('SELECT * FROM times ORDER BY time ASC');
	res.json({times: template.rows});

})

app.get("/api/", (req,res) => {
	res.json({ message: "We did it!" });
});

app.listen(app.get("port"), () => {
	console.log('Server at: http://localhost:${app.get("port")}/');
});
