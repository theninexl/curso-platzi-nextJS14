import styles from './Description.module.sass'
import Image from 'next/image'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <Image 
        src='/images/description.jpeg' 
        alt='products marketplace'
        width={500}
        height={300}
        priority={false} 
        quality={30} />
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>Lorem ipsum sit dolor amet</p>
      </div>
    </section>
  )
}