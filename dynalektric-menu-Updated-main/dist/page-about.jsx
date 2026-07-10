/* page-about.jsx */

function PageAbout({ navigate }) {
  useReveal();

  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split about-hero">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">ABOUT DYNALEKTRIC</div>
            <h1>Engineering-led electrical and electronics manufacturing.</h1>
            <p className="lead">
              Dynalektric designs and manufactures custom magnetics, transformers, control panels and power electronics for OEMs, EPC contractors and utilities. We engineer to specification, test in-house and document everything we ship.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              src="assets/about-hero-optimized.webp"
              alt="Dynalektric manufacturing facility"
              width="720"
              height="540"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="about-grid">
            <div className="about-col-left">
              <div className="about-eyebrow">Company</div>
              <h2 className="about-heading">An engineering-led manufacturer.</h2>
              <div className="about-meta">
                <div className="about-meta-label">Established</div>
                <div className="about-meta-value">1980, India</div>
                <div className="about-meta-label">Markets served</div>
                <div className="about-meta-value">India, Europe, Middle East, Asia</div>
                <div className="about-meta-label">Buyers we work with</div>
                <div className="about-meta-value">OEMs, EPC contractors, utilities, railways, industrial automation companies, procurement and SCM teams.</div>
              </div>
            </div>
            <div className="about-col-right">
              <p className="about-desc">
                We work as a long-term manufacturing partner. Our engineers take a customer specification, ask the right questions and supply a tested, documented solution on schedule.
              </p>
              <p className="about-desc">
                From single prototype builds to repeat production lines, the approach is the same: every Dynalektric product is designed, wound, wired, tested and documented in-house. Engineering, manufacturing and quality work on one floor, on one team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)', padding: 'calc(var(--section-y) * 0.8) 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 40, textAlign: 'center' }}>By the numbers</div>
          <div className="about-stats">
            <div style={{ textAlign: 'center' }}>
              <div className="big-num" style={{ marginBottom: 16, color: '#ffffff' }}><Counter to={40} />+</div>
              <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 8 }}>Years</div>
              <p style={{ fontSize: 14, color: 'rgba(244,244,241,0.75)' }}>Of in-house engineering and manufacturing</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="big-num" style={{ marginBottom: 16, color: '#ffffff' }}><Counter to={500} />+</div>
              <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 8 }}>Designs</div>
              <p style={{ fontSize: 14, color: 'rgba(244,244,241,0.75)' }}>Custom solutions delivered to specification</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="big-num" style={{ marginBottom: 16, color: '#ffffff' }}><Counter to={15} />+</div>
              <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 8 }}>Markets</div>
              <p style={{ fontSize: 14, color: 'rgba(244,244,241,0.75)' }}>Export destinations across three continents</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Manufacturing and engineering capability</span></div>
            <div><h2>Designed, wound, wired and tested in-house.</h2></div>
          </div>

          <div className="about-cap-grid">
            <div className="about-cap-item">
              <div className="mono num">01</div>
              <h3>Design and development</h3>
              <p>In-house electrical, mechanical and thermal design. From concept and feasibility through prototype, validation and series production release.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">02</div>
              <h3>Winding and assembly</h3>
              <p>Precision winding lines for magnetics and transformers. Vacuum pressure impregnation, oven curing and quality control at every stage.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">03</div>
              <h3>Panel build and wiring</h3>
              <p>Type-tested control panel assemblies built to IEC 61439 with full mechanical, electrical and FAT documentation.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">04</div>
              <h3>Routine and type testing</h3>
              <p>On-site test labs for high-voltage, partial discharge, temperature rise and impulse testing. Supplemented by accredited external partners.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">05</div>
              <h3>Quality systems</h3>
              <p>Quality management aligned with ISO 9001, supported by customer-specific QAP frameworks and full material traceability on request.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">06</div>
              <h3>Engineering support</h3>
              <p>Application engineering stays engaged after dispatch through commissioning, field issues and product-life support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Quality and compliance</span></div>
            <div>
              <h2>Standards, testing and documentation.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                Designs validated against IEC, IS and region-specific requirements. Routine and type testing on every order. Documentation prepared for supplier qualification and project handover.
              </p>
            </div>
          </div>
          <div className="cert-row">
            {CERTIFICATIONS.map(c => (
              <div className="cert-item" key={c.code}>
                <div className="cert-code">{c.code}</div>
                <div className="cert-label mono">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="qa-process-section">
            <div className="qa-process-heading mono">QUALITY ASSURANCE PROCESS</div>
            <div className="qa-process-card">
              <div className="qa-process-grid">
                <div>
                  <div className="qa-process-title">Routine testing</div>
                  <div className="qa-process-desc">100% electrical and thermal validation</div>
                </div>
                <div>
                  <div className="qa-process-title">Type testing</div>
                  <div className="qa-process-desc">On-site and accredited external labs</div>
                </div>
                <div>
                  <div className="qa-process-title">FAT support</div>
                  <div className="qa-process-desc">Factory acceptance testing with the customer</div>
                </div>
                <div>
                  <div className="qa-process-title">Documentation</div>
                  <div className="qa-process-desc">Full QAP, test reports, GA drawings, BoM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mono" style={{ marginTop: 24, color: 'var(--ink-muted)' }}>Certificate copies available on request for supplier qualification</div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Facility</span></div>
            <div>
              <h2>
                One floor, one team,<br className="desktop-br" />
                One engineering culture.
              </h2>
            </div>
          </div>
          <div className="about-facility-grid">
            <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src="./assets/facility-wide-shot-optimized.webp"
                alt="Dynalektric manufacturing facility"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-facility-sub">
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '100%' }}>
                <img
                  src="./assets/winding-floor.jpg"
                  alt="Winding floor — transformer and magnetics winding"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '8px', height: '100%' }}>
                <img
                  src="./assets/test-bay.png"
                  alt="Dynalektric test bay"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        navigate={navigate}
        heading={
          <>
            Send a specification.<br className="desktop-br" />
            Get an engineering response<br className="desktop-br" />
            in one business day.
          </>
        }
      />
      <Footer navigate={navigate} />
    </main>
  );
}

window.PageAbout = PageAbout;
