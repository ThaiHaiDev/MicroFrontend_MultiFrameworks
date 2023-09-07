// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LibsReactSelected } from '@check/libs-react/selected';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="react-remote" />
      <LibsReactSelected />
    </div>
  );
}

export default App;
