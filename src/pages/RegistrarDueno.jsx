import React, { useState } from 'react';
import styles from './styles/registrarDueno.module.css';

export const RegistrarDueno = () => {
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [dni, setDni] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, usuario, contrasena, dni);
    };

    return (
        <div className={styles['registrar-dueno-container']}>
            <div className={styles['overlay']}>
                <img
                    src='https://res.cloudinary.com/dmpcflyew/image/upload/v1728367667/Titulo_k54cgi.svg'
                    alt='Tarjeta roja'
                />
                <img
                    src='https://res.cloudinary.com/dmpcflyew/image/upload/v1728359221/Polish_20241007_223312487_pxwmn3.png'
                    alt='Logo tarjeta roja'
                    className={styles['logo-tarjeta-roja']}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Registro de Dueños</h1>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />

                <input
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder='DNI'
                />

                <input
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder='Usuario'
                />

                <input
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    placeholder='Contraseña'
                />

                <button type='submit'>Enviar</button>
            </form>

            <footer>© 2024 Roja Directa. Todos los derechos reservados</footer>
        </div>
    );
};
