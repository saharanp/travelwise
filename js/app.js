/* TravelWise – SPA Router */

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

// Navigate programmatically
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
  window.dispatchEvent(new CustomEvent('pagechange', { detail: { path } }));

  if (path === '/') {
    renderHome();
  } else if (path === '/destinations') {
    renderDestinations();
  } else if (path.startsWith('/destinations/')) {
    const slug = path.replace('/destinations/', '').replace(/\/$/, '');
    renderDestinationDetail(slug);
  } else if (path === '/hotels') {
    renderHotels();
  } else if (path.startsWith('/hotels/')) {
    const slug = path.replace('/hotels/', '').replace(/\/$/, '');
    renderHotelDetail(slug);
  } else if (path === '/about') {
    renderAbout();
  } else if (path === '/contact') {
    renderContact();
  } else {
    render404();
  }
}

// 404 page
function render404(type) {
  document.title = '404 – Page Not Found – TravelWise';
  const label = type ? `${type.charAt(0).toUpperCase() + type.slice(1)} not found` : 'Page not found';

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
