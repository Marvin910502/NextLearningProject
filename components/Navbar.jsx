import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";


function Navbar() {
  return (
    <div>
        <nav className={styles['menu-container']}>
            <ActiveLink text='Home' href='/'>Home</ActiveLink>
            <ActiveLink text='About' href='/about'>About</ActiveLink>
            <ActiveLink text='Contact' href='/contact'>Contact</ActiveLink>
        </nav>
    </div>
  )
}

export default Navbar


