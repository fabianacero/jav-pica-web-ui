const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const SERVER_PORT = 8080

app.post('/usuario/registrar', (req, res) => {
	const response = {
		statusCode: "0",
		message: "registro creado correctamente."
	}
	res.send(response)
})

app.post('/usuario/crear/oferta', (req, res) => {
	const response = {
		statusCode: "0",
		message: "Exitoso"
	}
	res.send(response)
})

app.post('/usuario/actualizar/oferta', (req, res) => {
	const response = {
		statusCode: "0",
		message: "Exitoso"
	}
	res.send(response)
})

app.post('/usuario/login', (req, res) => {
	const response = {
		"respuesta": {
			"statusCode": 0,
			"message": "Exitoso"
		},
		"usuarioDto": {
			"id": 3,
			"idType": "2",
			"names": "carlos",
			"surmanes": null,
			"email": "carlos2@gomez.com",
			"telephone": "6549875",
			"password": "1111111",
			"idRole": "2"
		}
	}
	
	res.send(response)
	// const response = {
	// 	statusCode: "50",
	// 	message: "Usuario y password incorrecto."
	// }
	// res.send(response)
})

app.get('/usuario/productos', (req, res) => {
	const response = [
		{
			"id": 1,
			"subCategoryId": "1",
			"productServiceDescription": "Sony",
			"subCategoryDescription": "Televisores",
			"value": 50000.0,
			"quantity": 0,
			"totalScore": 6.5,
			"iDProductProvider": null,
			"nameProvider": "Kallsonys"
		},
		{
			"id": 2,
			"subCategoryId": "1",
			"productServiceDescription": "Samsung",
			"subCategoryDescription": "Televisores",
			"value": 10000.0,
			"quantity": 0,
			"totalScore": 5.5,
			"iDProductProvider": "http://sfhksjd.com/1254",
			"nameProvider": "Sony"
		},
		{
			"id": 3,
			"subCategoryId": "1",
			"productServiceDescription": "LG",
			"subCategoryDescription": "Televisores",
			"value": 90000.0,
			"quantity": 0,
			"totalScore": 3.5,
			"iDProductProvider": "123456,kjhfskjd",
			"nameProvider": "Alkosto"
		}
	];
	
	res.send(response)
})

app.post('/usuario/crear/orden', (req, res) => {
	const response = 
	{
		"statusCode": 0,
		"message": "Exitoso",
		"nameProviderMnj":"DHL",
		"idOrden":3215456
	}
	
	res.send(response)
})

app.post('/payment/purchase', (req, res) => {
	const response = {
		statusCode: "0",
		message: "Pago Exitoso"
	}
	res.send(response)
})


app.listen(SERVER_PORT)
console.log(`SERVER LISTENING ON PORT ${SERVER_PORT}`)