const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");




app.use(express.json());
app.use(cors());

mercadopago.configure({
	access_token: "TEST-3930301893436237-102019-aadcc8ad0ee7bb96395e109703b1f456-442924342",
});

app.get("/", function (req, res) {
	res.send('el servidor de mercadopago funciona')
});


app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5174",
			"failure": "http://localhost:5174",
			"pending": "http://localhost:5174"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});



app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});