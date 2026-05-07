/* TravelWise – Header component
   Includes auth area (Login button ↔ User badge) and login modal.
   Auth state is read from / written to sessionStorage.
   window.digitalData.user is kept in sync on every login/logout. */

/* ── Render header shell (called once on DOMContentLoaded) ── */
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
          <!-- Auth area: swaps between Login button and User badge -->
          <div id="auth-area"></div>
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
        <!-- Mobile auth area -->
        <div id="mobile-auth-area" style="margin-top:.5rem;"></div>
        <a href="/contact" class="btn btn-primary btn-sm" data-link style="text-align:center;margin-top:.5rem;">Plan a Trip</a>
      </nav>
    </header>
  `;

  injectLoginModal();
  setupHamburger();
  setActiveNavLink();
  restoreSession();     // re-hydrate auth state from sessionStorage
}

/* ── Login modal injected once into <body> ── */
function injectLoginModal() {
  if (document.getElementById('login-modal-backdrop')) return;

  const backdrop = document.createElement('div');
  backdrop.id = 'login-modal-backdrop';
  backdrop.className = 'modal-backdrop hidden';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-labelledby', 'modal-title');

  backdrop.innerHTML = `
    <div class="modal" id="login-modal">
      <div class="modal-header">
        <h3 id="modal-title">Login to TravelWise</h3>
        <button class="modal-close" onclick="closeLoginModal()" aria-label="Close">✕</button>
      </div>

      <div class="form-group" style="margin-bottom:1rem;">
        <label for="modal-userid" style="font-size:.85rem;font-weight:600;display:block;margin-bottom:.35rem;">User ID</label>
        <input type="text" id="modal-userid" placeholder="Enter your User ID"
          style="width:100%;padding:.7rem 1rem;border:1.5px solid var(--color-border);border-radius:var(--radius-md);font-size:.9rem;outline:none;transition:var(--transition);"
          onfocus="this.style.borderColor='var(--color-primary)'"
          onblur="this.style.borderColor=''"
          onkeydown="if(event.key==='Enter')handleLogin()" />
      </div>
      <div class="form-group" style="margin-bottom:1rem;">
        <label for="modal-password" style="font-size:.85rem;font-weight:600;display:block;margin-bottom:.35rem;">Password</label>
        <input type="password" id="modal-password" placeholder="Enter your password"
          style="width:100%;padding:.7rem 1rem;border:1.5px solid var(--color-border);border-radius:var(--radius-md);font-size:.9rem;outline:none;transition:var(--transition);"
          onfocus="this.style.borderColor='var(--color-primary)'"
          onblur="this.style.borderColor=''"
          onkeydown="if(event.key==='Enter')handleLogin()" />
      </div>

      <p class="modal-error" id="modal-error">Invalid User ID or password. Please try again.</p>

      <div style="display:flex;gap:.75rem;margin-top:1.25rem;">
        <button class="btn btn-primary" style="flex:1;justify-content:center;" onclick="handleLogin()">Login</button>
        <button class="btn btn-outline" style="flex:1;justify-content:center;" onclick="closeLoginModal()">Cancel</button>
      </div>
    </div>
  `;

  // Close on backdrop click (outside modal box)
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeLoginModal();
  });

  document.body.appendChild(backdrop);
}

/* ── Open / close modal ── */
function openLoginModal() {
  const backdrop = document.getElementById('login-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('modal-userid')?.focus(), 80);
}

function closeLoginModal() {
  const backdrop = document.getElementById('login-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.add('hidden');
  document.body.style.overflow = '';
  // Reset fields and error
  const uid = document.getElementById('modal-userid');
  const pwd = document.getElementById('modal-password');
  const err = document.getElementById('modal-error');
  if (uid) uid.value = '';
  if (pwd) pwd.value = '';
  if (err) err.classList.remove('visible');
}

/* ── Adobe Customer Attributes helpers ──
   Visitor.getInstance(ORG_ID) is the correct API when Launch's ECID
   extension is used. AuthState lives on the class, not the instance.
   Retries handle the async Launch load (up to 20 × 100 ms = 2 s). */

function setCustomerIDsForUser(userId, retries) {
  retries = retries || 0;
  var ORG_ID = 'B504732B5D3B2A790A495ECF@AdobeOrg';
  if (typeof Visitor !== 'undefined' && Visitor.getInstance && Visitor.AuthState) {
    var v = Visitor.getInstance(ORG_ID);
    if (v && typeof v.setCustomerIDs === 'function') {
      v.setCustomerIDs({
        'travelwise_users': {
          'id': userId,
          'authState': Visitor.AuthState.AUTHENTICATED
        }
      });
      console.log('[CustomerAttributes] Authenticated as:', userId);
      return;
    }
  }
  if (retries < 20) {
    setTimeout(function() { setCustomerIDsForUser(userId, retries + 1); }, 100);
  } else {
    console.warn('[CustomerAttributes] Visitor not ready after 2s');
  }
}

function clearCustomerIDs(retries) {
  retries = retries || 0;
  var ORG_ID = 'B504732B5D3B2A790A495ECF@AdobeOrg';
  if (typeof Visitor !== 'undefined' && Visitor.getInstance && Visitor.AuthState) {
    var v = Visitor.getInstance(ORG_ID);
    if (v && typeof v.setCustomerIDs === 'function') {
      v.setCustomerIDs({
        'travelwise_users': {
          'id': '',
          'authState': Visitor.AuthState.LOGGED_OUT
        }
      });
      console.log('[CustomerAttributes] Logged out');
      return;
    }
  }
  if (retries < 20) {
    setTimeout(function() { clearCustomerIDs(retries + 1); }, 100);
  }
}

/* ── Handle login attempt ── */
function handleLogin() {
  const userId = (document.getElementById('modal-userid')?.value || '').trim().toUpperCase();
  const errEl  = document.getElementById('modal-error');

  // Match against demo users (case-insensitive userId, any password)
  const user = TRAVELWISE_USERS.find(u => u.userId.toUpperCase() === userId);

  if (!user) {
    if (errEl) errEl.classList.add('visible');
    document.getElementById('modal-userid')?.focus();
    return;
  }

  // Persist to sessionStorage
  try {
    sessionStorage.setItem('travelwise_logged_in', 'true');
    sessionStorage.setItem('travelwise_user', JSON.stringify(user));
  } catch (e) {}

  // Sync data layer user object immediately
  if (window.digitalData) {
    window.digitalData.user = {
      isLoggedIn:          true,
      userId:              user.userId,
      name:                user.name,
      loyaltyTier:         user.tier,
      memberSince:         user.memberSince,
      totalBookings:       user.totalBookings,
      favoriteDestination: user.favoriteDestination
    };
  }

  // Associate visitor ECID with CRM record for Customer Attributes targeting
  setCustomerIDsForUser(user.userId);

  closeLoginModal();
  renderAuthArea();
  // Skip reload inside VEC/iframe — it breaks the composer session
  if (window.self === window.top) window.location.reload();
}

/* ── Handle logout ── */
function handleLogout() {
  try {
    sessionStorage.removeItem('travelwise_logged_in');
    sessionStorage.removeItem('travelwise_user');
  } catch (e) {}

  // Reset data layer user to guest
  if (window.digitalData) {
    window.digitalData.user = {
      isLoggedIn: false, userId: null, name: null,
      loyaltyTier: null, memberSince: null,
      totalBookings: null, favoriteDestination: null
    };
  }

  // Clear visitor Customer Attributes on logout
  clearCustomerIDs();

  closeUserDropdown();
  renderAuthArea();
  // Skip reload inside VEC/iframe — it breaks the composer session
  if (window.self === window.top) window.location.reload();
}

/* ── Restore session on page load ── */
function restoreSession() {
  try {
    if (sessionStorage.getItem('travelwise_logged_in') === 'true') {
      renderAuthArea();
      return;
    }
  } catch (e) {}
  renderAuthArea();   // render guest state
}

/* ── Render auth area (called on boot, login, logout) ── */
function renderAuthArea() {
  const authArea       = document.getElementById('auth-area');
  const mobileAuthArea = document.getElementById('mobile-auth-area');
  if (!authArea) return;

  let isLoggedIn = false;
  let user = null;
  try {
    isLoggedIn = sessionStorage.getItem('travelwise_logged_in') === 'true';
    if (isLoggedIn) user = JSON.parse(sessionStorage.getItem('travelwise_user') || 'null');
  } catch (e) {}

  if (!isLoggedIn || !user) {
    /* ── Guest state ── */
    const guestHTML = `<button class="btn-login" onclick="openLoginModal()">Login</button>`;
    authArea.innerHTML = guestHTML;
    if (mobileAuthArea) mobileAuthArea.innerHTML = guestHTML.replace('class="btn-login"', 'class="btn-login" style="width:100%;display:block;text-align:center;"');
    return;
  }

  /* ── Logged-in state ── */
  const tier      = user.tier.toLowerCase();  // silver | gold | platinum
  const tierIcon  = { silver: '🥈', gold: '🥇', platinum: '💎' }[tier] || '👤';
  const memberFmt = new Date(user.memberSince).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

  const badgeHTML = `
    <div class="user-badge-wrapper" id="user-badge-wrapper">
      <button class="user-badge ${tier}" onclick="toggleUserDropdown(event)" aria-haspopup="true" aria-expanded="false" id="user-badge-btn">
        ${tierIcon} ${user.name.split(' ')[0]}
      </button>
      <div class="user-dropdown" id="user-dropdown" role="menu">
        <div class="user-dropdown-header">
          <div class="user-dropdown-name">${user.name}</div>
          <div class="user-dropdown-tier tier-${tier}">${tierIcon} ${user.tier} Member</div>
        </div>
        <div class="user-dropdown-row"><span>User ID</span><span>${user.userId}</span></div>
        <div class="user-dropdown-row"><span>Member Since</span><span>${memberFmt}</span></div>
        <div class="user-dropdown-row"><span>Total Bookings</span><span>${user.totalBookings}</span></div>
        <div class="user-dropdown-row"><span>Fav. Travel</span><span>${user.favoriteDestination}</span></div>
        <button class="btn-logout" onclick="handleLogout()">Logout</button>
      </div>
    </div>
  `;

  authArea.innerHTML = badgeHTML;

  // Mobile: simplified badge only (no dropdown; logout via full button)
  if (mobileAuthArea) {
    mobileAuthArea.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:.5rem .75rem;background:var(--color-background);border-radius:var(--radius-md);">
        <span style="font-size:.85rem;font-weight:600;">${tierIcon} ${user.name} <span class="user-dropdown-tier tier-${tier}" style="font-size:.75rem;">(${user.tier})</span></span>
        <button class="btn-logout" style="width:auto;margin:0;padding:.3rem .75rem;font-size:.75rem;" onclick="handleLogout()">Logout</button>
      </div>
    `;
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', handleOutsideClick);
}

/* ── Dropdown toggle ── */
function toggleUserDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('user-dropdown');
  const btn      = document.getElementById('user-badge-btn');
  if (!dropdown) return;
  const isOpen = dropdown.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', isOpen);
}

function closeUserDropdown() {
  const dropdown = document.getElementById('user-dropdown');
  const btn      = document.getElementById('user-badge-btn');
  if (dropdown) dropdown.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function handleOutsideClick(e) {
  const wrapper = document.getElementById('user-badge-wrapper');
  if (wrapper && !wrapper.contains(e.target)) {
    closeUserDropdown();
    document.removeEventListener('click', handleOutsideClick);
  }
}

/* ── Hamburger ── */
function setupHamburger() {
  const btn       = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Active nav link ── */
function setActiveNavLink() {
  const path       = window.location.pathname;
  const allLinks   = document.querySelectorAll('.nav-links a, .mobile-nav a');

  allLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '/' && path === '/') {
      link.classList.add('active');
    } else if (href && href !== '/' && path.startsWith(href)) {
      link.classList.add('active');
    }
  });
}

// Re-highlight active link on every route change
window.addEventListener('pagechange', setActiveNavLink);
