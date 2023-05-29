import styles from './Footer.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <p>Desenvolvido por <b>Fabiano SSantos</b></p>
        <Logo />
    </div>
  )
}
