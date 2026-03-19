export default function Hero({ visible }) {
  return (
    <section
      className="hero"
      style={{ opacity: visible ? 1 : 0 }}
      aria-label="Introduction"
    >
      <p className="hero__pre">// DEV_SYSTEM_v1.0 — INITIALIZED</p>

      <h1 className="hero__name">
        JACK&nbsp;<span className="hero__name-accent">NARGI</span>
        <span className="hero__cursor" aria-hidden="true" />
      </h1>

      <p className="hero__role">SOFTWARE DEVELOPER // CS STUDENT</p>

      <p className="hero__desc">
        Building software systems from low-level deployment tooling to
        AI-integrated applications. Final semester Computer Science at SVCC.
        Interested in application engineering, tooling, and anything with
        moving parts.
      </p>

      <div className="hero__meta">
        <div className="hero__meta-item">
          <span className="hero__meta-key">LOCATION</span>
          <span className="hero__meta-val">Virginia, US</span>
        </div>
        <div className="hero__meta-item">
          <span className="hero__meta-key">STATUS</span>
          <span className="hero__meta-val hero__meta-val--active">
            OPEN_TO_WORK
          </span>
        </div>
        <div className="hero__meta-item">
          <span className="hero__meta-key">STACK</span>
          <span className="hero__meta-val">React · Python · C# · Java</span>
        </div>
        <div className="hero__meta-item">
          <span className="hero__meta-key">AVAIL</span>
          <span className="hero__meta-val">2025</span>
        </div>
      </div>
    </section>
  )
}
