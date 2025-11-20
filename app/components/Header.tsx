'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/event', label: 'Event' },
  { href: '/join', label: 'Join' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/sponsor', label: 'Sponsor' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <Link href="/">
              <img src="/images/tedx-logo-new.png" alt="TEDx Tsushima Youth" className={styles.navLogoImg} />
            </Link>
          </div>
          <ul className={styles.navMenu}>
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
