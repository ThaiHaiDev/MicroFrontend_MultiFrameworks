// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Address } from '@check/address';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="react-remote" />
      <Address />
    </div>
  );
}

export default App;
