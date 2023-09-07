import styles from './libs-next-selected.module.scss';

/* eslint-disable-next-line */
export interface LibsNextSelectedProps {}

export function LibsNextSelected(props: LibsNextSelectedProps) {
  return (
    <div className={styles['container']}>
      <div className="relative inline-block">
      <div className="w-6 h-6 tooltip__icon"
      >
        {/* <Image
          src="/img/question.svg"
          alt="daikin-logo"
          width={32}
          height={32}
        /> */}
      </div>
      <div
      className="absolute font-normal right-0 z-10 px-3 py-2 shadow-md bg-opacity-95 transform rounded-lg bottom-8  bg-silver w-72 tooltip__content"
      >
        <p className="text-sm text-neutral-900 text-start text-red-500">
          Hello Next
        </p>
      </div>
    </div>
    </div>
  );
}

export default LibsNextSelected;
