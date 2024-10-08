import React from 'react';
import styles from './styles/welcomeScreen.module.css';

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
                <button className={`${styles.button} ${styles.red}`}>
                    Registrar Dueño
                </button>
                <button className={`${styles.button} ${styles.white}`}>
                    Registrar Usuario
                </button>
                <button className={`${styles.button} ${styles.black}`}>
                    Continuar como invitado
                </button>
            </div>

            <p className={styles['login-text']}>
                Ya tengo una cuenta. <span>Ingresa aquí</span>
            </p>
        </div>
    );
};
