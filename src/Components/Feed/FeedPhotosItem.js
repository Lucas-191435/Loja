import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  
  return (
    <div className={styles.produto} onClick={handleClick}>
      
        <Image src={photo.src} alt={photo.title} />
        
        <span className={styles.visualizacao}>{photo.acessos}</span>
      
        <h2>{photo.title}</h2>
        <p>Preço: {photo.preco}$</p>
    </div>
  );
};

export default FeedPhotosItem;
