import styles from './Description.module.sass'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <img src='/images/description.jpeg' alt='products marketplace' />
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>Lorem ipsum sit dolor amet</p>
      </div>
    </section>
  )
}