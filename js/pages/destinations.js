/* TravelWise – Destinations listing page */

function renderDestinations() {
  document.title = 'Destinations – TravelWise';

  const params = new URLSearchParams(window.location.search);
  const initRegion = params.get('region') || 'All';
  const initType   = params.get('type')   || 'All';
  const initQ      = params.get('q')      || '';

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Explore Destinations</h1>
        <p>Discover 20 handpicked destinations across India and the world — each offering a unique and unforgettable experience.</p>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="container filter-inner">
        <div class="filter-group">
          <span class="filter-label">Region:</span>
          ${['All', 'Domestic', 'International'].map(r => `
            <button class="filter-btn ${r === initRegion ? 'active' : ''}"
              data-filter-region="${r}"
              onclick="setDestFilter('region','${r}')">
              ${r === 'All' ? '🌍 All' : r === 'Domestic' ? '🇮🇳 India' : '✈ International'}
            </button>
          `).join('')}
        </div>
        <div class="filter-group">
          <span class="filter-label">Type:</span>
          ${['All', 'Beach', 'Mountain', 'City', 'Adventure'].map(t => `
            <button class="filter-btn ${t === initType ? 'active' : ''}"
              data-filter-type="${t}"
              onclick="setDestFilter('type','${t}')">
              ${t === 'All' ? 'All Types' : t === 'Beach' ? '🏖 Beach' : t === 'Mountain' ? '⛰ Mountain' : t === 'City' ? '🏙 City' : '🧗 Adventure'}
            </button>
          `).join('')}
        </div>
        <div style="margin-left:auto;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
          <input type="search" id="dest-search" placeholder="Search destinations..." value="${initQ}"
            style="padding:.4rem .9rem;border:1.5px solid var(--color-border);border-radius:var(--radius-md);font-size:.875rem;outline:none;min-width:180px;"
            oninput="filterDestinations()" />
          <span class="results-count" id="dest-count"></span>
        </div>
      </div>
    </div>

    <!-- Destinations Grid -->
    <section class="section-sm">
      <div class="container">
        <div class="dest-grid" id="dest-grid"></div>
        <div id="dest-empty" style="display:none;text-align:center;padding:4rem 1rem;">
          <div style="font-size:3rem;">🔍</div>
          <h3 style="margin:1rem 0 .5rem;">No destinations found</h3>
          <p>Try adjusting your filters or search term.</p>
          <button class="btn btn-primary" style="margin-top:1.25rem;" onclick="clearDestFilters()">Clear Filters</button>
        </div>
      </div>
    </section>
  `;

  // Store current filter state
  window._destFilters = { region: initRegion, type: initType };
  filterDestinations();
}

function setDestFilter(dimension, value) {
  if (!window._destFilters) window._destFilters = { region: 'All', type: 'All' };
  window._destFilters[dimension] = value;

  // Update active button states
  document.querySelectorAll(`[data-filter-${dimension}]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset[`filter${dimension.charAt(0).toUpperCase()+dimension.slice(1)}`] === value);
  });

  filterDestinations();
}

function filterDestinations() {
  const filters = window._destFilters || { region: 'All', type: 'All' };
  const q = (document.getElementById('dest-search')?.value || '').toLowerCase().trim();

  const filtered = destinations.filter(d => {
    const regionOk = filters.region === 'All' || d.region === filters.region;
    const typeOk   = filters.type   === 'All' || d.type   === filters.type;
    const qOk      = !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.type.toLowerCase().includes(q);
    return regionOk && typeOk && qOk;
  });

  const grid  = document.getElementById('dest-grid');
  const empty = document.getElementById('dest-empty');
  const count = document.getElementById('dest-count');

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    if (count) count.innerHTML = '';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = filtered.map(d => renderDestinationCard(d)).join('');
    if (count) count.innerHTML = `<strong>${filtered.length}</strong> destination${filtered.length !== 1 ? 's' : ''}`;
  }
}

function clearDestFilters() {
  window._destFilters = { region: 'All', type: 'All' };
  const searchInput = document.getElementById('dest-search');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('[data-filter-region]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filterRegion === 'All');
  });
  document.querySelectorAll('[data-filter-type]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filterType === 'All');
  });

  filterDestinations();
}
