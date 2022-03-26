import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Loja } from '../Assets/Loja.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Loja />
      <p>Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
