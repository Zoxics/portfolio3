import DataFlicker from "./DataFlicker";

export default function StatusBar({ visible, done }) {
  return (
    <header
      className="status-bar"
      style={{ opacity: visible ? 1 : 0 }}
      role="banner"
    >
      <div className="status-bar__left">
        <span className="status-bar__logo">
          <span className="status-bar__logo-bracket">[</span>
          JACK_NARGI
          <span className="status-bar__logo-bracket">]</span>
        </span>
        <nav className="status-bar__nav" aria-label="Primary">
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <a
            href="https://github.com/Zoxics"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </nav>
      </div>

      <div className="status-bar__right">
        <DataFlicker active={done} />
        <span className="status-bar__status">
          SYS_STATUS:&nbsp;
          <span className="status-bar__ok">OPTIMAL</span>
          <span className="status-bar__fps"> [60FPS]</span>
        </span>
      </div>
    </header>
  );
}
