/* TravelWise – Header component */

function renderHeader() {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="logo" data-link>
          <div class="logo-icon">✈</div>
          TravelWise
        </a>

        <nav class="nav-links" aria-label="Main navigation">
          <a href="/" data-link>Home</a>
          <a href="/destinations" data-link>Destinations</a>
          <a href="/hotels" data-link>Hotels</a>
          <a href="/about" data-link>About</a>
          <a href="/contact" data-link>Contact</a>
        </nav>

        <div class="header-cta">
          <a href="/contact" class="btn btn-primary btn-sm" data-link>Plan a Trip</a>
        </div>

        <button class="hamburger" id="hamburger-btn" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
        <a href="/" data-link>Home</a>
        <a href="/destinations" data-link>Destinations</a>
        <a href="/hotels" data-link>Hotels</a>
        <a href="/about" data-link>About</a>
        <a href="/contact" data-link>Contact</a>
        <a href="/contact" class="btn btn-primary btn-sm" data-link style="text-align:center;margin-top:.5rem;">Plan a Trip</a>
      </nav>
    </header>
  `;

  setupHamburger();
  setActiveNavLink();
}

function setupHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close when a nav link is clicked
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function setActiveNavLink() {
  const path = window.location.pathname;
  const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

  allNavLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '/' && path === '/') {
      link.classList.add('active');
    } else if (href !== '/' && path.startsWith(href)) {
      link.classList.add('active');
    }
  });
}

// Re-highlight active link on every route change
window.addEventListener('pagechange', setActiveNavLink);
