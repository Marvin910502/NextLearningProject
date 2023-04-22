import Link from "next/link";
import styles from "./Navbar.module.css";


function Navbar() {
  return (
    <div>
        <nav className={styles['menu-container']}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar


