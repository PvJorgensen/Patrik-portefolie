import styles from './nav.module.scss'


export const Nav = () => {
  return (
    <div className={styles.navwrapper}>
        <h3>Patrik Jørgensen</h3>
        <nav className={styles.navmain}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </nav>
    </div>
  )
}
