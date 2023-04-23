import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


function Navbar() {
  return (
    <div>
        <nav className={styles['menu-container']}>
            {
              menuItems.map(({text,href}) => (
                <ActiveLink key={href} text={text} href={href} />
              ))
            }
            {/* <ActiveLink text='Home' href='/'>Home</ActiveLink>
            <ActiveLink text='About' href='/about'>About</ActiveLink>
            <ActiveLink text='Contact' href='/contact'>Contact</ActiveLink> */}
        </nav>
    </div>
  )
}

export default Navbar


