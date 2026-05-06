/* TravelWise – Destination Detail page */

function renderDestinationDetail(slug) {
  const dest = destinations.find(d => d.slug === slug);

  if (!dest) {
    render404('destination');
    return;
  }

  document.title = `${dest.name} – TravelWise`;

  const destHotels = hotels.filter(h => h.destinationSlug === slug);
  const price = dest.startingPrice.toLocaleString('en-IN');

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Hero Image -->
    <div class="detail-hero">
      <img src="${dest.image}" alt="${dest.name}" />
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-info">
        <div class="container">
          <h1>${dest.name}</h1>
          <div class="detail-hero-meta">
            <span>📍 ${dest.country}</span>
            <span class="badge ${dest.region === 'Domestic' ? 'badge-green' : 'badge-primary'}">${dest.region}</span>
            <span class="badge badge-secondary">${dest.type}</span>
            <span>★ ${dest.rating} / 5.0</span>
            <span>From ₹${price}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="detail-body">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/" data-link>Home</a>
          <span class="sep">›</span>
          <a href="/destinations" data-link>Destinations</a>
          <span class="sep">›</span>
          <span>${dest.name}</span>
        </nav>

        <div class="detail-grid">
          <!-- Main Content -->
          <div class="detail-main">

            <div class="detail-section">
              <h2>About ${dest.name}</h2>
              <p>${dest.description}</p>
            </div>

            <div class="detail-section">
              <h2>Things to Do</h2>
              <div class="things-list">
                ${dest.thingsToDo.map(t => `
                  <div class="thing-item">
                    <span class="thing-icon">✓</span>
                    ${t}
                  </div>
                `).join('')}
              </div>
            </div>

            <section class="recommended-hotels-section" id="recommended-hotels-section">
              <h2 class="rec-section-title">Hotels in <span class="rec-destination-name">${dest.name}</span></h2>
              <div id="recommended-hotels-container"></div>
            </section>

          </div>

          <!-- Sidebar -->
          <div class="detail-sidebar">
            <div class="info-card">
              <h3>Quick Info</h3>
              <div class="info-row">
                <span class="label">Country</span>
                <span class="value">${dest.country}</span>
              </div>
              <div class="info-row">
                <span class="label">Region</span>
                <span class="value">${dest.region}</span>
              </div>
              <div class="info-row">
                <span class="label">Travel Type</span>
                <span class="value">${dest.type}</span>
              </div>
              <div class="info-row">
                <span class="label">Rating</span>
                <span class="value" style="color:#f59e0b;">★ ${dest.rating}/5</span>
              </div>
              <div class="info-row">
                <span class="label">Starting From</span>
                <span class="value" style="color:var(--color-primary);">₹${price}</span>
              </div>
              <div class="info-row">
                <span class="label">Hotels Available</span>
                <span class="value">${destHotels.length}</span>
              </div>
              <div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:.75rem;">
                <button class="btn btn-primary" onclick="navigateTo('/contact')" style="width:100%;justify-content:center;">
                  Plan My Trip →
                </button>
                ${destHotels.length > 0 ? `
                <button class="btn btn-outline" onclick="navigateTo('/hotels/${destHotels[0].slug}')" style="width:100%;justify-content:center;">
                  View Hotels
                </button>
                ` : ''}
              </div>
            </div>
          </div>
        </div><!-- /detail-grid -->
      </div>
    </div>

    <!-- Related Destinations -->
    <section class="section" style="background:#fff;">
      <div class="container">
        <div class="section-header">
          <h2>Similar Destinations</h2>
          <p>You might also enjoy these ${dest.type} destinations.</p>
        </div>
        <div class="dest-grid">
          ${destinations
            .filter(d => d.slug !== slug && d.type === dest.type)
            .slice(0, 3)
            .map(d => renderDestinationCard(d))
            .join('')}
        </div>
      </div>
    </section>
  `;
}
