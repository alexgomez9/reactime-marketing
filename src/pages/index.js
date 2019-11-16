import React from "react"
// import { Link } from "gatsby";
// import styled from "styled-components"

import Splash from "../components/splash"
import VisualState from "../components/visualState"
import Features from "../components/features"
import Installation from "../components/installation"
import Team from "../components/team"
import Image from "../components/image"
import SEO from "../components/seo"
// import DemoImage from "../components/DemoImage"
import demogif from "../images/demo.gif"
import css from "../components/layout.css";

const styles = {
  reactGreen: `#072D2B`,
  lighterGreen: `#002e2b`,
  lightestGreen: `#0c4c41`,
  reactGold: `#ECCB98`,
  lighterGold: `#E4C2B3`
}


const IndexPage = () => (
  <>
    <Splash>
      <SEO title="Home" />
      <h1 style={{ fontFamily: `Raleway`, fontSize: `1.5rem`, fontWeight: `300`, letterSpacing: `2px`, color: styles.reactGreen, margin: `160px 0 50px 0`, textAlign: `center` }}>STATE DEBUGGER FOR <strong>REACT</strong></h1>
      <div style={{ maxWidth: `300px`, marginBottom: `50px` }}>
        <Image />
      </div>
      <p style={{ fontFamily: `Raleway`, textAlign: `center`, color: styles.reactGreen }}>
        The only time-travel debugging tool you need to develop your React
        application by tracking, visualizing, and reverting state changes.
      </p>
      <p style={{ fontFamily: `Raleway`, fontSize: `16px`, color: `white`, textAlign: `center`, marginBottom: `50px` }}>
        Interested in <span style={{ color: styles.reactGreen }}>contributing?</span> Reactime is open-source: help make React
        state debugging easier!
      </p>
    </Splash>
    <VisualState>
      <h2><strong>STATE:</strong> TRACK, REVERT, VISUALIZE</h2>
      <img src={demogif} alt="ReacTime Demo" />
    </VisualState>
    <Features>
      <h2>FEATURES</h2>
      <h4 style={{ fontWeight: `400`, fontSize: `13px`, color: `red` }}>
        VISUALIZING, RECORDING, AND TRACKING STATE HAS NEVER BEEN SIMPLER.
      </h4>
    </Features>
    <Installation>
      <h2>SIMPLE INSTALLATION</h2>
      <h6>YOUTUBE TUTORIAL</h6>
    </Installation>
    <Team>
      <h2>MEET THE TEAM</h2>
    </Team>
  </>
)

export default IndexPage