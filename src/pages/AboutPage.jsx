import React from "react";
import { about } from "../data/about";
import ProfileCard from "../components/ProfileCard";
import SkillBar from "../components/SkillBar";
import SkillsCarousel from "../components/SkillsCarousel";
import Timeline from "../components/Timeline";

export default function AboutPage() {
  return (
    <div className="site-container">
      <section style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 28, alignItems: "start" }}>
        <div>
          <div style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.04))", padding: 18, borderRadius: 16 }}>
            <ProfileCard data={about} />
            <div style={{ marginTop: 18 }}>
                <h4 style={{ marginBottom: 10 }}>Compétences</h4>
                  <div style={{ marginTop: 10 }}>
                    <SkillsCarousel categories={about.skillCategories} interval={3500} />
                  </div>
            </div>
          </div>
        </div>

        <div>
          <h3>À propos</h3>
          <p className="muted">{about.bio}</p>

          <div style={{ marginTop: 18 }}>
            <h4>Expérience</h4>
            <Timeline items={about.timeline} />
          </div>

          <div style={{ marginTop: 18 }}>
            <h4>Réseaux</h4>
            <div style={{ display: "flex", gap: 12 }}>
              <a href={about.socials.github} className="muted">GitHub</a>
              <a href={about.socials.linkedin} className="muted">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
