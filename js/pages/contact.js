/* TravelWise – Contact page */

function renderContact() {
  document.title = 'Contact Us – TravelWise';

  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Get In Touch</h1>
        <p>Our travel experts are ready to help you plan the perfect journey. Reach out anytime.</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">

          <!-- Contact Info -->
          <div class="contact-info">
            <h2>We'd Love to Hear From You</h2>
            <p>Whether you're planning your first trip or your fiftieth, our team is here to make every journey extraordinary. Expect a response within 2 business hours.</p>

            <div class="contact-details">
              <div class="contact-detail-item">
                <div class="contact-detail-icon">📍</div>
                <div class="contact-detail-text">
                  <div class="label">Our Office</div>
                  <div class="value">12th Floor, Prestige Tower<br>MG Road, Bengaluru 560001, Karnataka</div>
                </div>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">📞</div>
                <div class="contact-detail-text">
                  <div class="label">Phone</div>
                  <div class="value">+91 80 4000 1234</div>
                </div>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">✉️</div>
                <div class="contact-detail-text">
                  <div class="label">Email</div>
                  <div class="value">hello@travelwise.in</div>
                </div>
              </div>
              <div class="contact-detail-item">
                <div class="contact-detail-icon">🕐</div>
                <div class="contact-detail-text">
                  <div class="label">Support Hours</div>
                  <div class="value">Mon–Sat: 9 AM – 8 PM IST<br>Emergency: 24/7</div>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div style="margin-top:2rem;padding:1.5rem;background:var(--color-primary-light);border-radius:var(--radius-lg);border:1px solid rgba(37,99,235,.15);">
              <h4 style="color:var(--color-primary);margin-bottom:1rem;">Quick Links</h4>
              <div style="display:flex;flex-direction:column;gap:.6rem;">
                <a href="/destinations" data-link style="color:var(--color-primary);font-size:.9rem;font-weight:500;display:flex;align-items:center;gap:.5rem;">
                  🌍 Browse All Destinations
                </a>
                <a href="/hotels" data-link style="color:var(--color-primary);font-size:.9rem;font-weight:500;display:flex;align-items:center;gap:.5rem;">
                  🏨 View All Hotels
                </a>
                <a href="/about" data-link style="color:var(--color-primary);font-size:.9rem;font-weight:500;display:flex;align-items:center;gap:.5rem;">
                  ℹ️ About TravelWise
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-card">
            <h3>Send Us a Message</h3>

            <div id="contact-form-wrapper">
              <form id="contact-form" onsubmit="handleContactSubmit(event)" novalidate>

                <div class="form-row-2">
                  <div class="form-group" id="fg-first-name">
                    <label for="first-name">First Name *</label>
                    <input type="text" id="first-name" placeholder="Priya" />
                    <span class="error-msg">Please enter your first name.</span>
                  </div>
                  <div class="form-group" id="fg-last-name">
                    <label for="last-name">Last Name *</label>
                    <input type="text" id="last-name" placeholder="Sharma" />
                    <span class="error-msg">Please enter your last name.</span>
                  </div>
                </div>

                <div class="form-group" id="fg-email">
                  <label for="contact-email">Email Address *</label>
                  <input type="email" id="contact-email" placeholder="priya@example.com" />
                  <span class="error-msg">Please enter a valid email address.</span>
                </div>

                <div class="form-group" id="fg-phone">
                  <label for="contact-phone">Phone Number</label>
                  <input type="tel" id="contact-phone" placeholder="+91 98765 43210" />
                </div>

                <div class="form-group" id="fg-subject">
                  <label for="contact-subject">Enquiry Type *</label>
                  <select id="contact-subject">
                    <option value="">Select an option</option>
                    <option value="trip-planning">Trip Planning</option>
                    <option value="hotel-booking">Hotel Booking</option>
                    <option value="group-travel">Group Travel</option>
                    <option value="honeymoon">Honeymoon Package</option>
                    <option value="corporate">Corporate Travel</option>
                    <option value="other">Other</option>
                  </select>
                  <span class="error-msg">Please select an enquiry type.</span>
                </div>

                <div class="form-group" id="fg-destination">
                  <label for="contact-destination">Destination of Interest</label>
                  <select id="contact-destination">
                    <option value="">Any destination</option>
                    ${destinations.map(d => `<option value="${d.slug}">${d.name}, ${d.country}</option>`).join('')}
                  </select>
                </div>

                <div class="form-group" id="fg-message">
                  <label for="contact-message">Your Message *</label>
                  <textarea id="contact-message" placeholder="Tell us about your dream trip — when you want to travel, for how long, how many travellers, any special requests..."></textarea>
                  <span class="error-msg">Please enter a message (minimum 20 characters).</span>
                </div>

                <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1.25rem;">
                  <input type="checkbox" id="contact-consent" style="width:auto;cursor:pointer;" />
                  <label for="contact-consent" style="font-size:.85rem;color:var(--color-text-light);cursor:pointer;font-weight:400;">
                    I agree to receive travel inspiration and offers from TravelWise. I can unsubscribe anytime.
                  </label>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;" id="contact-submit-btn">
                  Send Message →
                </button>

              </form>
            </div>

            <!-- Success State (hidden initially) -->
            <div class="form-success" id="form-success">
              <div class="success-icon">✈️</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our travel expert will contact you within 2 business hours.</p>
              <button class="btn btn-primary" style="margin-top:1.25rem;" onclick="resetContactForm()">Send Another Message</button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Map placeholder / office highlights -->
    <section class="section-sm" style="background:#fff;">
      <div class="container">
        <div class="section-header">
          <h2>Where to Find Us</h2>
        </div>
        <div style="background:var(--color-background);border:1px solid var(--color-border);border-radius:var(--radius-xl);overflow:hidden;height:320px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;">
          <div style="font-size:3rem;">🗺</div>
          <p style="font-weight:500;color:var(--color-text);">12th Floor, Prestige Tower, MG Road, Bengaluru 560001</p>
          <a href="https://maps.google.com/?q=MG+Road+Bengaluru" target="_blank" rel="noopener" class="btn btn-outline">Open in Google Maps →</a>
        </div>
      </div>
    </section>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  let valid = true;

  function validate(fieldId, groupId, condition) {
    const group = document.getElementById(groupId);
    if (!condition) {
      group.classList.add('has-error');
      valid = false;
    } else {
      group.classList.remove('has-error');
    }
  }

  const firstName = document.getElementById('first-name').value.trim();
  const lastName  = document.getElementById('last-name').value.trim();
  const email     = document.getElementById('contact-email').value.trim();
  const subject   = document.getElementById('contact-subject').value;
  const message   = document.getElementById('contact-message').value.trim();

  validate('first-name',   'fg-first-name', firstName.length >= 1);
  validate('last-name',    'fg-last-name',  lastName.length >= 1);
  validate('contact-email','fg-email',      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  validate('contact-subject','fg-subject',  subject !== '');
  validate('contact-message','fg-message',  message.length >= 20);

  if (!valid) return;

  const btn = document.getElementById('contact-submit-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('contact-form-wrapper').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 900);
}

function resetContactForm() {
  document.getElementById('contact-form-wrapper').style.display = 'block';
  document.getElementById('form-success').style.display = 'none';
  document.getElementById('contact-form').reset();
  const btn = document.getElementById('contact-submit-btn');
  if (btn) { btn.textContent = 'Send Message →'; btn.disabled = false; }
  document.querySelectorAll('.form-group.has-error').forEach(g => g.classList.remove('has-error'));
}
