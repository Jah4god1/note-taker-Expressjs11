const express = require ('express')
const api_routes = require('./routes/api-routes')
const html_routes = require('./routes/html-routes');
// const { urlencoded } = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended:  true }));
app.use(express.json())
app.use(express.static("public"))

app.use('/api', api_routes)
app.use('/', html_routes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

