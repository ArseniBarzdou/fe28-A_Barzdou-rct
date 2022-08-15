import React from 'react';
//@ts-ignore
import styles from "./App.module.css";

const Button = ({title, onClick, className }: any) => {
  

  return <div onClick={onClick} className={`${styles.button}  ${className || ''}`}>{title}</div>
}

export const App = () => {
  return (
    <div className={styles.app}>
      <Button title={'Наведи'} onClick={() => alert('Ура')} className={styles.blueButton} />
      <Button title={'Не нажмешь'}  className={styles.greyButton} disabled={true} readonly={true} />
      <Button title={'Наведи'} onClick={() => alert('Сработало')} className={styles.secButton} />
      <Button title={'Не нажмешь'}  className={styles.greyButton} disabled={true} />
      <Button title={'Кнопка ошибки'} onClick={() => alert('О неет')} className={styles.errorButton} />
      <Button title={'Не нажмешь'}  className={styles.greyButton} disabled={true} />
      
    </div>
  );
}

export default App;
