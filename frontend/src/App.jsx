import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import OpenModalButton from './components/OpButtonModal';
import Modal from './components/Modal';
import Buttons from './components/Buttons';

function App() {
  /*intento de definir estados*/
  const [showModal, setShowModal] = useState(false);
  const [tasksInProgress, setTasksInProgress] = useState([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
   /*esto seria para obtener tareas en progreso*/
  useEffect(() => {
    const fetchTasksInProgress = async () => {
      try {
        const response = await axios.get('/tasks');
        setTasksInProgress(response.data);
      } catch (error) {
        console.error('Error al obtener tareas en progreso:', error);
      }
    };

    fetchTasksInProgress();
  }, []);

  return (
    <div className="app-container">
      <OpenModalButton openModal={openModal} />
      <Modal showModal={showModal} closeModal={closeModal}>
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
        </Routes>
      </Modal>
    </div>
  );
}

export default App;