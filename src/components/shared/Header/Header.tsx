import Link from "next/link"
import styles from './Header.module.css'

export const Header = () => {
  //este console log saldrá en la consola del navegador y no en el terminal porque el componente padre que es root layout tsx si que tiene la directiva 'use client' implementada
  console.log('Hola mundo header');
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/store'>Store</Link></li>
        </ul>
      </nav>
    </header>
  )
}