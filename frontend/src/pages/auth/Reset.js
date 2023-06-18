import React from 'react';
import styles from "./auth.module.scss";
import {RiLockPasswordFill} from "react-icons/ri";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';


const Reset = () => {
  return <div className={`container ${styles.auth}`}>
    <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <RiLockPasswordFill size={35} color='#999'/>
            </div>
            <h2>Réinitialiser le mot de passe</h2>
            <form>
                <input type='password' placeholder='Entrer un nouveau mot de passe' required name='password'/>
                <input type='password' placeholder='Confirmer le mot de passe' required name='password'/>
                <button type='submit' className='--btn --btn-primary --btn-block'>Réinitialiser le mot de passe</button>
                <div className={styles.links}>
                <p>
                  <Link to="/">Accueil</Link>
                </p> 
                <p>
                  <Link to="/login">S'inscrire</Link>
                </p>
            </div>
            </form>         
        </div>
    </Card>   
  </div>;
};

export default Reset;