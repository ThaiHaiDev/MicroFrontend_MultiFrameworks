import styles from './libs-react-button.module.scss';

/* eslint-disable-next-line */
export interface LibsReactButtonProps {
  label: string;
  onClick: () => void;
}

export function LibsReactButton({ label, onClick }: LibsReactButtonProps) {
  return (
    <button onClick={onClick} data-testid="button">
      {label}
    </button>
  );
}

export default LibsReactButton;
