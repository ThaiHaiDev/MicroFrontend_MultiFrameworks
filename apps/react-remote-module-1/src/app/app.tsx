// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className={styles.reactRemoteModule1}>
      <NxWelcome title="React remote module 1" />
    </div>
  );
}

export default App;
