import express from 'express';
import cors from 'cors';
import { PORT } from './config/config.js'; 
import taskRoutes from './routes/tasks.routes.js'; 
import { pool } from './config/db.js'; 

// Verificar la conexión a la base de datos
pool.getConnection()
  .then(conn => {
    console.log('Conexión a la base de datos exitosa');
    conn.release();
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use(taskRoutes); 

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));