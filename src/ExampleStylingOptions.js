import styles from './ExampleStylingOptions.module.scss';

export default function ExampleStylingOptions() {
  return (
    <>
      <div
        style={{
          margin: '4px',
          padding: '8px',
          border: '2px solid red',
          borderRadius: '12px',
        }}
      >
        Cat
      </div>
      <div className={styles.dog}>Dog</div>
      <div className={styles.mouse}>Mouse</div>
    </>
  );
}
