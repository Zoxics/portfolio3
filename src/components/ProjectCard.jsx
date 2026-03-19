import { useState, useEffect } from "react";
import ScanlineReveal from "./ScanlineReveal";
import DiagramRenderer from "./DiagramRenderer";

const STATUS_LABEL = {
  LIVE: "LIVE",
  IN_DEVELOPMENT: "IN_DEV",
  CONCEPT: "CONCEPT",
};

const FINAL_COORDS = ["[12, 44]", "[31, 85]", "[08, 62]", "[83, 37]"];

function rand99() {
  return Math.floor(Math.random() * 99)
    .toString()
    .padStart(2, "0");
}

function CardCoord({ cycling, locked, finalValue }) {
  const [display, setDisplay] = useState(`[${rand99()}, ${rand99()}]`);

  useEffect(() => {
    if (locked) {
      setDisplay(finalValue);
      return;
    }
    if (!cycling) return;
    const id = setInterval(() => setDisplay(`[${rand99()}, ${rand99()}]`), 70);
    return () => clearInterval(id);
  }, [cycling, locked, finalValue]);

  return (
    <span
      style={{
        display: "block",
        textAlign: "left",
        paddingTop: "6px",
        fontSize: "10px",
        color: locked ? "var(--text-dim)" : "var(--text-muted)",
        letterSpacing: "0.04em",
        fontFamily: "var(--font)",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        transition: "color 0.4s",
      }}
    >
      {display}
    </span>
  );
}

export default function ProjectCard({ project, active, delay, index = 0 }) {
  const [coordsCycling, setCoordsCycling] = useState(false);
  const [coordsLocked, setCoordsLocked] = useState(false);

  const finalCoord = FINAL_COORDS[index % FINAL_COORDS.length];
  const statusClass = `project-card__status--${(project.status ?? "concept").toLowerCase()}`;

  useEffect(() => {
    if (!active) return;
    const t1 = setTimeout(() => setCoordsCycling(true), delay);
    const t2 = setTimeout(() => {
      setCoordsCycling(false);
      setCoordsLocked(true);
    }, delay + 520);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, delay]);

  const showCoord = coordsCycling || coordsLocked;

  return (
    <ScanlineReveal active={active} delay={delay}>
      <article className="project-card">
        <div className="project-card__header">
          <h2 className="project-card__title">{project.title}</h2>
          <span className={`project-card__status ${statusClass}`}>
            {STATUS_LABEL[project.status] ?? project.status}
          </span>
        </div>

        <div className="project-card__body">
          {/* Diagram col — coord sits below the image, outside overflow:hidden */}
          <div style={{ minWidth: 0 }}>
            <div className="project-card__diagram-inner">
              <DiagramRenderer type={project.diagram} />
            </div>
            {showCoord && (
              <CardCoord
                cycling={coordsCycling}
                locked={coordsLocked}
                finalValue={finalCoord}
              />
            )}
          </div>

          {/* Info col — min-width:0 prevents text bleeding into diagram */}
          <div className="project-card__info" style={{ minWidth: 0 }}>
            <p className="project-card__desc">{project.content}</p>

            <div className="project-card__specs">
              {project.build && (
                <div className="project-card__spec">
                  <span className="project-card__spec-key">BUILD</span>
                  <span className="project-card__spec-val">
                    {project.build}
                  </span>
                </div>
              )}
              {project.languages && (
                <div className="project-card__spec">
                  <span className="project-card__spec-key">LANGUAGES</span>
                  <span className="project-card__spec-val">
                    {project.languages}
                  </span>
                </div>
              )}
              {project.year && (
                <div className="project-card__spec">
                  <span className="project-card__spec-key">YEAR</span>
                  <span className="project-card__spec-val">{project.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </ScanlineReveal>
  );
}
