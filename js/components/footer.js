/* TravelWise – Footer component */

function renderFooter() {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  const year = new Date().getFullYear();

  footerRoot.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">

          <!-- Brand -->
          <div class="footer-brand">
            <a href="/" class="logo" data-link>
              <div class="logo-icon">✈</div>
              TravelWise
            </a>
            <p>Your trusted companion for extraordinary travel experiences. We curate the finest destinations and hotels across India and around the globe.</p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Facebook">f</a>
              <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
              <a href="#" class="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="/" data-link>Home</a></li>
              <li><a href="/destinations" data-link>All Destinations</a></li>
              <li><a href="/destinations?region=Domestic" data-link>India Travel</a></li>
              <li><a href="/destinations?region=International" data-link>International</a></li>
              <li><a href="/hotels" data-link>Hotels</a></li>
              <li><a href="/about" data-link>About Us</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-contact-item">
              <span class="icon">📍</span>
              <span>12th Floor, Prestige Tower<br>MG Road, Bengaluru 560001</span>
            </div>
            <div class="footer-contact-item">
              <span class="icon">📞</span>
              <span>+91 80 4000 1234</span>
            </div>
            <div class="footer-contact-item">
              <span class="icon">✉️</span>
              <span>hello@travelwise.in</span>
            </div>
            <div class="footer-contact-item">
              <span class="icon">🕐</span>
              <span>Mon–Sat: 9AM – 8PM IST</span>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="footer-col">
            <h4>Stay Inspired</h4>
            <p style="font-size:0.875rem;color:#9ca3af;margin-bottom:0.5rem;">Get curated travel deals, destination guides, and insider tips delivered weekly.</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Your email address" aria-label="Email for newsletter" id="footer-newsletter-input" />
              <button type="button" onclick="handleFooterNewsletter()">→</button>
            </div>
            <p id="footer-newsletter-msg" style="font-size:0.8rem;color:#34d399;margin-top:0.5rem;display:none;">
              ✓ You're subscribed!
            </p>
          </div>

        </div><!-- /footer-grid -->

        <div class="footer-bottom">
          <p>© ${year} TravelWise. All rights reserved. Built for Adobe Target Capstone.</p>
          <div class="footer-bottom-links">
            <a href="/about" data-link>Privacy Policy</a>
            <a href="/about" data-link>Terms of Use</a>
            <a href="/contact" data-link>Support</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

function handleFooterNewsletter() {
  const input = document.getElementById('footer-newsletter-input');
  const msg = document.getElementById('footer-newsletter-msg');
  if (!input || !msg) return;

  if (input.value && input.value.includes('@')) {
    input.value = '';
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 4000);
  } else {
    input.style.borderColor = '#ef4444';
    setTimeout(() => { input.style.borderColor = ''; }, 2000);
  }
}
