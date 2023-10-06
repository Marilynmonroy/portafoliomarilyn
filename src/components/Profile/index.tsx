/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
  <div className={styles.profile}>
    <img className={styles.avatar} src='https://github.com/Marilynmonroy.png' alt="Foto de Marilyn Aragón Monroy"/>
    <h1 className={styles.name}>Marilyn Aragón Monroy</h1>
  </div>
  )
}