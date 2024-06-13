import { Router } from 'express';
import { getAllTasks, createTask, updateTask, deleteTask, getBoard, createBoard, getTasksByStatus } from '../controllers/tasks.js';

const router = Router();

router.get('/', getAllTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/board/:boardId', getBoard);
router.post('/board', createBoard);

// Nueva ruta para obtener tareas por estado
router.get('/tasks/:status', getTasksByStatus);

export default router;