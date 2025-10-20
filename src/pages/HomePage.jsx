import React from "react";
import AnimatedHero from "../components/AnimatedHero";
import FeaturedProjects from "../components/FeaturedProjects";

export default function HomePage() {
    return (
        <div className="site-container">
            <AnimatedHero onPrimaryClick={() => { window.location.href = '/projects'; }} />
            <FeaturedProjects />
        </div>
    );
}