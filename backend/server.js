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
	user: "Austin", // this is user: "postgres" on cloud
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

// this allows user to search a name up and find the rank
app.get("/api/rank", async (req,res) => {
	try {
		const name = req.query.name;

		const temp = 'SELECT name,time,rank FROM (SELECT name,time, RANK() OVER (ORDER BY time ASC) rank FROM times) t WHERE name=$1';
		const resp = await pool.query(temp,[name]);
		res.json({rank: resp.rows});
	} catch (err) {

	}

})

// find length of table (amount of entries)
app.get("/api/length", async (req,res) => {
	try {
		const temp = await pool.query('SELECT COUNT(*) AS rows FROM times');
		res.json({size: temp.rows});
	} catch (err) {

	}
})

app.get("/api/", (req,res) => {
	res.json({ message: "We did it!" });
});

app.listen(app.get("port"), () => {
	console.log('Server at: http://localhost:${app.get("port")}/');
});
