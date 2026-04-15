"use client";
import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import styles from "@/css/header.module.css";
import Image from "next/image";
import sitelogo from "../../../public/sitelogo.png";
import Link from "next/link";
import WishlistContent from "../WishlistContent";
import { useWishlistStore } from "@/store/wishlistStore";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const items = useWishlistStore((state) => state.items);

  return (
    <>
      {menuOpen && (
        <div
          className={styles.navbarBackdrop}
          onClick={() => setMenuOpen(false)}
        >
          <button
            className={styles.navbarCloseBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
      )}

      <nav className={styles.navbarRoot}>
        <div className={styles.navbarInner}>
          <div className={styles.navbarLeft}>
            <button
              className={styles.navbarMenuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>

            <div className={styles.logoIcon}>
              <Image src={sitelogo} alt="Mettamuse logo" />
            </div>
          </div>

          <div className={styles.navbarLogoText}>LOGO</div>

          <div className={styles.navbarIcons}>
            <div className={styles.navbarIconItem}>
              <Search size={24} />
            </div>
            <div
              className={`${styles.navbarIconItem} ${styles.wishlist}`}
              onClick={() => setWishlistOpen(true)}
            >
              <Heart size={24} />
              {items.length > 0 && (
                <span className={styles.badge}>{items.length}</span>
              )}
            </div>
            <div className={styles.navbarIconItem}>
              <ShoppingBag size={24} />
            </div>

            <div
              className={`${styles.navbarIconItem} ${styles.navbarDesktopOnly}`}
            >
              <User size={24} />
            </div>

            <div className={`${styles.navbarLang} ${styles.navbarDesktopOnly}`}>
              <span>ENG</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className={styles.navbarLinks}>
          <a className={styles.navbarLinkItem}>Shop</a>
          <a className={styles.navbarLinkItem}>Skills</a>
          <a className={styles.navbarLinkItem}>Stories</a>
          <a className={styles.navbarLinkItem}>About</a>
          <a className={styles.navbarLinkItem}>Contact Us</a>
        </div>

        {/* Drawer */}
        <div
          className={`${styles.navbarDrawer} ${menuOpen ? styles.navbarDrawerOpen : ""}`}
        >
          <Link href="/" className={styles.navbarDrawerItem}>
            Shop
          </Link>
          <Link href="/" className={styles.navbarDrawerItem}>
            Skills
          </Link>
          <Link href="/" className={styles.navbarDrawerItem}>
            Stories
          </Link>
          <Link href="/" className={styles.navbarDrawerItem}>
            About
          </Link>
          <Link href="/" className={styles.navbarDrawerItem}>
            Contact Us
          </Link>

          <div className={styles.navbarDrawerExtras}>
            <div className={styles.navbarDrawerExtra}>
              <User size={20} />
              <span>Account</span>
            </div>

            <div className={styles.navbarDrawerExtra}>
              <span>ENG</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </nav>
      {wishlistOpen && (
        <>
          {/* Backdrop */}
          <div
            className={styles.modalBackdrop}
            onClick={() => setWishlistOpen(false)}
          />

          {/* Modal */}
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>Wishlist</h3>
              <button onClick={() => setWishlistOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <WishlistContent />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
