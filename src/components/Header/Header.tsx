import { formatData } from '../../helpers/formatData';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NEWS REACT</h1>
      <p className={styles.date}>{formatData(new Date())}</p>
    </header>
  );
};

export default Header;
