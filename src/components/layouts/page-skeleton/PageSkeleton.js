import styles from './PageSkeleton.module.scss';

export function PageSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={'spinner-border text-primary ' + styles.spinnerEl} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
