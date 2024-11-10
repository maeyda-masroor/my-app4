// components/Navbar.js
"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import the custom CSS
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' ,fontSize:'30px' }}>SPH!NX</Link>
      </div>
      {/* Toggle Button for mobile */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Links */}
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="/" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' ,fontSize:'20px'}}>Home</Link>
          </li>
          <li>
            <Link href="/about" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' ,fontSize:'20px' }}>About</Link>
          </li>
          <li>
            <Link href="/feed" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize:'20px' }}>Feed</Link>
          </li>
          <li>
            <Link href="/work" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' ,fontSize:'20px' }} >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
