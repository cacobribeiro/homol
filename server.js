const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();

// Parser de request bodies: json e x-www-form-urlencoded.
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// Middleware que adiciona um UUID a cada requisição. Serve para criar
// threads de auditoria nos logs.

const port = process.env.PORT || 3000;

app.listen(port, host, () => console.log(`Server is running on port ${port}.`));
