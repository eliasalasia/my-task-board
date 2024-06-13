import { pool } from '../config/db.js';

// Obtener todas las tareas
export const getAllTasks = async (req, res) => {
  try {
    const [tasks] = await pool.query('SELECT * FROM thetask');
    res.json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


// Crear una nueva tarea
export const createTask = async (req, res) => {
  try {
    const { name, description, icon, status } = req.body;
    const query = 'INSERT INTO thetask (name, description, icon, status) VALUES (?, ?, ?, ?)';
    const [result] = await pool.query(query, [name, description, icon, status]);
    res.status(201).json({ id: result.insertId, name, description, icon, status });
  } catch (error) {
    console.error('Error al crear tarea:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Actualizar una tarea existente
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, icon, status } = req.body;
    const query = 'UPDATE thetask SET name = ?, description = ?, icon = ?, status = ? WHERE id = ?';
    await pool.query(query, [name, description, icon, status, id]);
    res.json({ message: 'Tarea actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM thetask WHERE id = ?';
    await pool.query(query, [id]);
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar tarea:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Obtener un tablero por ID
export const getBoard = async (req, res) => {
  try {
    const { boardId } = req.params;
    console.log('Board ID:', boardId); // Verificar que el boardId se está recibiendo correctamente
    const [board] = await pool.query('SELECT * FROM boards WHERE id = ?', [boardId]);
    if (board.length === 0) {
      return res.status(404).json({ message: 'Tablero no encontrado' });
    }
    res.json(board[0]);
  } catch (error) {
    console.error('Error al obtener tablero:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Crear un nuevo tablero
export const createBoard = async (req, res) => {
  try {
    const { name, description } = req.body;
    const query = 'INSERT INTO boards (name, description) VALUES (?, ?)';
    const [result] = await pool.query(query, [name, description]);
    res.status(201).json({ id: result.insertId, name, description });
  } catch (error) {
    console.error('Error al crear tablero:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getTasksByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const [tasks] = await pool.query('SELECT * FROM thetask WHERE status = ?', [status]);
    res.json(tasks);
  } catch (error) {
    console.error('Error al obtener tareas por estado:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};