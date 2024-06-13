import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpenModalButton from './components/OpButtonModal';
import Modal from './components/Modal';
import Buttons from './components/Buttons';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasksInProgress, setTasksInProgress] = useState([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const fetchTasksInProgress = async () => {
      try {
        const response = await axios.get('/tasks/in-progress');
        setTasksInProgress(response.data);
      } catch (error) {
        console.error('Error al obtener tareas en progreso:', error);
      }
    };

    fetchTasksInProgress();
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <OpenModalButton openModal={openModal} />
        <Modal showModal={showModal} closeModal={closeModal}>
          <Routes>
            <Route path="/" element={<Buttons />} />
          </Routes>
        </Modal>
  
        <div>
          <h2>aca tiene que mostrar el resultado</h2>
          <ul>
            {Array.isArray(tasksInProgress) && tasksInProgress.map(task => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;