import styles from './quienes-somos.css';

export default function QuienesSomos() {
  return (
    <div className={styles.quienesSomos}>
      <h1 className={styles.title}>Quienes Somos</h1>
      <p className={styles.content}>
        Somos un equipo apasionado dedicado al cuidado y bienestar de las mascotas. 
        Nuestra misión es proporcionar servicios de calidad para asegurar que cada animal 
        reciba la atención que merece.
      </p>
    </div>
  );
}