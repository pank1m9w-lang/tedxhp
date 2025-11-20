'use client'

import Link from 'next/link'
import styles from './BottomNav.module.css'

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/event', label: 'Event', icon: 'calendar' },
  { href: '/join', label: 'Join', icon: 'user-plus', highlight: true },
  { href: '/sponsor', label: 'Sponsor', icon: 'heart' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
]

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.bottomNavItem} ${item.highlight ? styles.bottomNavItemHighlight : ''}`}
        >
          {item.icon === 'home' && (
            <svg className={styles.bottomNavIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          )}
          {item.icon === 'calendar' && (
            <svg className={styles.bottomNavIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          )}
          {item.icon === 'user-plus' && (
            <svg className={styles.bottomNavIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          )}
          {item.icon === 'heart' && (
            <svg className={styles.bottomNavIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          )}
          {item.icon === 'mail' && (
            <svg className={styles.bottomNavIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          )}
          <span className={styles.bottomNavLabel}>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
