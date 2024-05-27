import styles from './NavButton.module.css'

function NavButton ({title, link}){
    return (
        <li className={styles["nav-li"]}>
          <a className={styles.navA} href={`${link}`}>{title}</a>
        </li>
    )
}

export default NavButton