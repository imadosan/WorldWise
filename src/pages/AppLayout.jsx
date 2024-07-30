import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import styles from './AppLayout.module.css';

function AddLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AddLayout;
