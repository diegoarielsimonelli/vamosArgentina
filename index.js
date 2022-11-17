import  express,{ json, Router, urlencoded } from 'express';
import {Jugadores}  from './jugadores.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static('public'));

const router = new Router();
const jugadores = new Jugadores("./db/jugadores.json");


router.get('/', async (req, res) => {
  const api= await jugadores.getAll()
 
  res.json( api);
})






app.use('/api/jugadores', router);
const server = app.listen(PORT, () => console.log('Server up'));
server.on('error', error => console.log(`Error: ${error}`));