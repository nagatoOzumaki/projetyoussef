import React from 'react';
import styles from "./auth.module.scss";
import {LuMail} from "react-icons/lu";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';


const Forgot = () => {
  return <div className={`container ${styles.auth}`}>
    <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <LuMail size={35} color='#999'/>
            </div>
            <h2>Mot de passe oublié</h2>
            <form>
                <input type='email' placeholder='Entrer votre adresse mail' required name='email'/>
                <button type='submit' className='--btn --btn-primary --btn-block'>Obtenir l'email de réinitialisation</button>
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

export default Forgot;