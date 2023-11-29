import express from "express";
import handlebars from "express-handlebars"
import path from "path";

import { __dirname } from './utils.js'

import routeViewIndex from './routes/views/index.route.js'
import routeApiProducts from './routes/api/products.route.js'
//import routeProducts from "./routes/products.route.js"
//import routeCarts from "./routes/carts.route.js"
//import routeRTM from "./routes/realTimeProducts.route.js"

//Configuracion inicial
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')));

//Configuracion handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
});

//Routes
app.use('/', routeViewIndex)
app.use('/api', routeApiProducts)
//app.use('/api/carts/', routeCarts)
//app.use('/home/', routeProducts)
//app.use('/rtp/', routeRTM)

export default app;
