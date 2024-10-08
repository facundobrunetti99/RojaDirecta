import React from 'react';
import styles from './styles/welcomeScreen.module.css';
import { Navigate } from 'react-router-dom';

export const WelcomeScreen = () => {
    return (
        <div className={styles['home-container']}>
            <div className={styles['overlay']}></div>
            <img
                src='https://res.cloudinary.com/dmpcflyew/image/upload/v1728359221/Polish_20241007_223312487_pxwmn3.png'
                alt='Roja Directa Logo'
                className={styles['logo-corner']}
            />
            <img
                src='https://res.cloudinary.com/dmpcflyew/image/upload/v1728359083/Logo_sw2hot.svg'
                alt='Roja Directa Logo'
                className={styles['logo-main']}
            />
            <div className={styles['button-container']}>
                <button className={`${styles.button} ${styles.red}`}
					onClick={()=> Navigate('/registrar-dueno')}
				>
                    Registrar Dueño
                </button>
                <button className={`${styles.button} ${styles.white}`}
					onClick={()=>Navigate('/registrar-usuario')}	
				>
                    Registrar Usuario
                </button>
                <button className={`${styles.button} ${styles.black}`}
					onClick={()=>Navigate('/Inicio')}
				>
                    Continuar como invitado
                </button>
            </div>

            <p className={styles['login-text']}>
                Ya tengo una cuenta. <span>Ingresa aquí</span>
            </p>
        </div>
    );
};
