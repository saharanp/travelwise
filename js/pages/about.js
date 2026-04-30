/* TravelWise – About page */

function renderAbout() {
  document.title = 'About Us – TravelWise';

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Hero -->
    <section class="about-hero">
      <div class="container">
        <h1>Crafting Journeys,<br>Creating Memories</h1>
        <p>TravelWise was founded on a simple belief: that exceptional travel is not a luxury — it is a transformative experience available to everyone who seeks it.</p>
      </div>
    </section>

    <!-- Stats Bar -->
    <div class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="number">50K+</div>
            <div class="label">Happy Travellers</div>
          </div>
          <div class="stat-item">
            <div class="number">20+</div>
            <div class="label">Destinations</div>
          </div>
          <div class="stat-item">
            <div class="number">30+</div>
            <div class="label">Luxury Hotels</div>
          </div>
          <div class="stat-item">
            <div class="number">4.8★</div>
            <div class="label">Average Rating</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission -->
    <section class="section mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-text">
            <h2>Our Mission</h2>
            <p>At TravelWise, we believe travel has the power to broaden perspectives, forge deep connections, and unlock versions of ourselves we never knew existed. Our mission is to make those discoveries possible for every traveller.</p>
            <p>We painstakingly curate every destination and hotel on our platform — not just for luxury, but for authenticity, local connection, and genuine experience. From the sacred ghats of Varanasi to the caldera-edge villas of Santorini, every recommendation comes with our personal guarantee.</p>
            <p>Founded in Bengaluru in 2020, TravelWise has grown from a boutique travel blog into a trusted platform serving over 50,000 travellers across India and internationally.</p>
            <div style="display:flex;gap:1rem;margin-top:1.5rem;flex-wrap:wrap;">
              <button class="btn btn-primary btn-lg" onclick="navigateTo('/destinations')">Explore Destinations</button>
              <button class="btn btn-outline btn-lg" onclick="navigateTo('/contact')">Get in Touch</button>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80"
              alt="Travel adventure" style="border-radius:var(--radius-xl);width:100%;object-fit:cover;height:420px;box-shadow:var(--shadow-xl);" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section" style="background:var(--color-background);">
      <div class="container">
        <div class="section-header">
          <h2>What We Stand For</h2>
          <p>Our values guide every recommendation, every partnership, and every interaction with our community of travellers.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3>Responsible Travel</h3>
            <p>We champion eco-conscious travel, prioritising properties with strong sustainability credentials and supporting local communities in every destination we feature.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Trust & Transparency</h3>
            <p>Every review on our platform is genuine, every price is honest, and every recommendation is made without commercial bias. We only earn when you travel well.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Personalised Expertise</h3>
            <p>We don't believe in one-size-fits-all travel. Our platform learns your preferences and our human experts refine the details to craft journeys that feel made for you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section team-section">
      <div class="container">
        <div class="section-header">
          <h2>Meet Our Team</h2>
          <p>A passionate group of travellers, storytellers, and hospitality experts who live and breathe exploration.</p>
        </div>
        <div class="team-grid">
          ${[
            {
              name: 'Arjun Mehta',
              role: 'Founder & CEO',
              bio: 'Former hotelier turned entrepreneur. Has visited 60+ countries and still insists Ladakh is the world\'s most underrated destination.',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
            },
            {
              name: 'Priya Krishnan',
              role: 'Head of Destinations',
              bio: 'Specialist in South and Southeast Asia. Personally vets every new destination added to the platform. Kerala is home, the world is her office.',
              img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
            },
            {
              name: 'Rahul Desai',
              role: 'Chief Travel Editor',
              bio: 'Award-winning travel writer whose work has appeared in Condé Nast Traveller and National Geographic. Obsessed with hidden Himalayan trails.',
              img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
            },
            {
              name: 'Sneha Patel',
              role: 'Head of Guest Experience',
              bio: 'Passionate advocate for seamless travel. Leads our 24/7 concierge team and believes every journey deserves a perfect moment.',
              img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
            }
          ].map(m => `
            <div class="team-card">
              <img src="${m.img}" alt="${m.name}" class="team-avatar" />
              <div class="team-name">${m.name}</div>
              <div class="team-role">${m.role}</div>
              <p class="team-bio">${m.bio}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Press / Awards -->
    <section class="section" style="background:#fff;">
      <div class="container">
        <div class="section-header">
          <h2>Awards & Recognition</h2>
          <p>Proud to be recognised by leading travel publications and industry bodies.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;">
          ${[
            { award: 'Best Travel Platform', body: 'India Travel Awards 2024', icon: '🏆' },
            { award: 'Top 10 Travel Startups', body: 'Economic Times 2023', icon: '📰' },
            { award: 'Excellence in Hospitality', body: 'TTF South Asia 2024', icon: '⭐' },
            { award: 'Responsible Tourism Award', body: 'WTM London 2023', icon: '🌱' }
          ].map(a => `
            <div style="background:var(--color-background);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:1.5rem;text-align:center;">
              <div style="font-size:2rem;margin-bottom:.75rem;">${a.icon}</div>
              <h4 style="color:var(--color-text);margin-bottom:.25rem;">${a.award}</h4>
              <p style="font-size:.85rem;">${a.body}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="newsletter-section">
      <div class="container newsletter-inner">
        <div class="newsletter-text">
          <h2>Ready to Start Your Journey?</h2>
          <p>Let our travel experts craft your perfect itinerary across any of our 20+ destinations.</p>
        </div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
          <button class="btn btn-secondary btn-lg" onclick="navigateTo('/destinations')">Explore Now</button>
          <button class="btn btn-lg" style="background:rgba(255,255,255,.15);color:#fff;border:2px solid rgba(255,255,255,.4);" onclick="navigateTo('/contact')">Contact Us</button>
        </div>
      </div>
    </section>
  `;
}
