/* TravelWise – SPA Router
   ─────────────────────────────────────────────────────
   On every route change:
     1. Update window.digitalData  ← FIRST (so Launch reads fresh data)
     2. Dispatch 'pagechange' event with enriched detail
     3. Render the new page

   Adobe Launch will listen for the 'pagechange' event.
   Do NOT add Adobe Target / triggerView calls here. */

// Intercept all [data-link] anchor clicks and push to history
document.addEventListener('click', e => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href && href !== window.location.pathname + window.location.search) {
      navigateTo(href);
    }
  }
});

// Navigate programmatically (also used by page components)
function navigateTo(path) {
  history.pushState({}, '', path);
  router();
}

// Back / forward buttons
window.addEventListener('popstate', router);

// Boot
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  router();
});

// Core router
function router() {
  const path = window.location.pathname;

  window.scrollTo({ top: 0, behavior: 'instant' });

  /* ── 1. Update data layer BEFORE dispatching event ── */
  if (window.travelwise && window.travelwise.updateDataLayer) {
    window.travelwise.updateDataLayer();
  }

  /* ── 2. Dispatch enriched pagechange event for Adobe Launch ── */
  window.dispatchEvent(new CustomEvent('pagechange', {
    detail: {
      path:      path,
      pageType:  window.travelwise ? window.travelwise.getPageType(path)  : null,
      entityId:  window.travelwise ? window.travelwise.getEntityId(path)  : null,
      isLoggedIn: window.digitalData ? window.digitalData.user.isLoggedIn  : false,
      userTier:   window.digitalData ? window.digitalData.user.loyaltyTier : null,
      timestamp:  new Date().toISOString()
    }
  }));

  /* ── 3. Render page ── */
  // at.js in VEC mode can redirect to /index.html — treat it as the root
  const normalizedPath = path === '/index.html' ? '/' : path;

  if (normalizedPath === '/') {
    renderHome();
  } else if (normalizedPath === '/destinations') {
    renderDestinations();
  } else if (normalizedPath.startsWith('/destinations/')) {
    const slug = normalizedPath.replace('/destinations/', '').replace(/\/$/, '');
    renderDestinationDetail(slug);
  } else if (normalizedPath === '/hotels') {
    renderHotels();
  } else if (normalizedPath.startsWith('/hotels/')) {
    const slug = normalizedPath.replace('/hotels/', '').replace(/\/$/, '');
    renderHotelDetail(slug);
  } else if (normalizedPath === '/about') {
    renderAbout();
  } else if (normalizedPath === '/contact') {
    renderContact();
  } else if (window.self !== window.top) {
    // Inside VEC/EEC iframe with an unrecognised proxy path — fall back to home
    history.replaceState({}, '', '/');
    renderHome();
  } else {
    render404();
  }
}

// 404 page
function render404(type) {
  document.title = '404 – Page Not Found – TravelWise';
  const label = type
    ? `${type.charAt(0).toUpperCase() + type.slice(1)} not found`
    : 'Page not found';

  document.getElementById('app').innerHTML = `
    <div class="container">
      <div class="not-found">
        <div class="code">404</div>
        <h2>${label}</h2>
        <p>The page you're looking for doesn't exist or may have been moved. Let's get you back on track.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" onclick="navigateTo('/')">Go Home</button>
          <button class="btn btn-outline btn-lg" onclick="navigateTo('/destinations')">Browse Destinations</button>
        </div>
      </div>
    </div>
  `;
}
