import styles from '../styles/Form.module.css';

const Form = () => {
  return (
    <form className={styles.profileForm}>
      <div className={styles.formRow}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className={styles.formRow}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="user@email.com" />
      </div>

      <fieldset className={styles.radioFormRow}>
        <legend>Allow push notifications?</legend>

        <input type="radio" name="push-type" id="push-type-1" value="no" />
        <label htmlFor="push-type-1" className={styles.radioLabel}>
          No
        </label>

        <input type="radio" name="push-type" id="push-type-2" value="yes" checked />
        <label htmlFor="push-type-2" className={styles.radioLabel}>
          Yes
        </label>
      </fieldset>
    </form>
  );
};

export default Form;
