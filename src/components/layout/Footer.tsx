import React from 'react';
import styles from '@/css/footer.module.css';
import Image from 'next/image';
// A data structure to manage your payment methods cleanly
const PAYMENT_METHODS = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", alt: "Visa" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", alt: "Mastercard" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "PayPal" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Amex_logo_2015.svg", alt: "American Express" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple Pay" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Pay_Logo.svg", alt: "Google Pay" },
];


const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
  <div className={styles.footerInner}>
    
    {/* Top Section */}
    <div className={styles.footerTop}>
      <div className={styles.footerNewsletter}>
        <h3>Be the first to know</h3>
        <p>Sign up for updates from Cartrify.</p>
        <div className={styles.footerInputGroup}>
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className={styles.footerEmailInput}
          />
          <button className={styles.footerSubscribeBtn}>
            Subscribe
          </button>
        </div>
      </div>
      
      <div className={styles.footerContact}>
        <h3>Contact Us</h3>
        <p>+44 4444 4444 44</p>
        <p>customercare@Cartify.com</p>

        <h3 style={{ marginTop: '20px' }}>Currency</h3>
        <div>🇺🇸 • USD</div>

        <p style={{ fontSize: '10px', marginTop: '10px' }}>
          Transactions will be completed in Euros and a currency reference is available on hover.
        </p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className={styles.footerBottom}>
      <div className={styles.footerColumn}>
        <h3>mettā muse</h3>
        <ul>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h3>Quick Links</h3>
        <ul>
          <li>Orders & Shipping</li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h3>Follow Us</h3>
        <div>
          <span style={{ border: '1px solid #fff', borderRadius: '50%', padding: '5px', marginRight: '10px' }}>IG</span>
          <span style={{ border: '1px solid #fff', borderRadius: '50%', padding: '5px' }}>IN</span>
        </div>
        
        <h3 style={{ marginTop: '40px' }}>mettā muse ACCEPTS</h3>

        <div className={styles.footerPaymentWrapper}>
          <h3 className={styles.footerPaymentTitle}>WE ACCEPT</h3>

          <div className={styles.footerPaymentList}>
            {PAYMENT_METHODS.map((method) => (
              <div key={method.alt} className={styles.footerPaymentIconBox}>
                <Image
                  src={method.src}
                  alt={`${method.alt} payment icon`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 30px, 40px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className={styles.footerCopy}>
      Copyright © 2026 Cartify. All rights reserved.
    </div>
  </div>
</footer>
  );
};

export default Footer;