// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className={styles.reactRemoteModule2}>
      <NxWelcome title="React remote module 2" />
    </div>
  );
}

export default App;
