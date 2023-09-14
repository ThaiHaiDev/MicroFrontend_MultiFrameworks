// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className={styles.reactRemote}>
      <NxWelcome title="React remote" />
    </div>
  );
}

export default App;
