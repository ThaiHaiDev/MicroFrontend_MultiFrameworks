// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LibsReactButton } from '@check/libs-react/button';
import { LibsReactSelected } from '@check/libs-react/selected';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="react-remote" />
      <LibsReactSelected />
      <LibsReactButton label="Click me" onClick={() => console.log('ge')}/>
    </div>
  );
}

export default App;
