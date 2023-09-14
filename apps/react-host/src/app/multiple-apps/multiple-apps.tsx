import Wrapper from '../wrapper/wrapper';
import styles from './multiple-apps.module.css';

/* eslint-disable-next-line */
export interface MultipleAppsProps {}

export function MultipleApps(props: MultipleAppsProps) {
  return (
    <div className={styles['container']}>
      <Wrapper importName="react-remote" elementName="react-remote-root" />
      <Wrapper importName="angular-remote" elementName="angular-remote-root" />
      <Wrapper importName="react-remote-module-1" elementName="react-remote-module-1-root" />
      <Wrapper importName="react-remote-module-2" elementName="react-remote-module-2-root" />
    </div>
  );
}

export default MultipleApps;
