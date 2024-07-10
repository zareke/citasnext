'use client'

import { useState } from 'react';
import styles from './contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Aquí puedes manejar el envío del formulario
      console.log('Formulario enviado:', formData);
      alert('Formulario enviado con éxito!');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    
    <div className={styles.contacto}>
        <div className='centrador'>
      <h1 className={styles.title}>Contacto</h1>
      </div>
      <div className='centrador'>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre" className={styles.label}>Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
          {errors.mensaje && <p className={styles.error}>{errors.mensaje}</p>}
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      </div>
    </div>
    
  );
}