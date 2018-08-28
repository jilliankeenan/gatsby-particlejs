import React from "react"
import Typography from "typography";
import Particles from "react-particles-js";
import "../pages/index.css";
var FontAwesome = require('react-fontawesome');


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
});

export default () => (
 
  <div id="particles">
  <ul>
  <li><a href="contact.asp">CV</a></li>
  <li> <a href="default.asp">About</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">Home</a></li>
</ul>
  <div >
    <Particles className="check" params={{
      particles: {
        number: {
          value: 20
        
        },
        size: {
          value: 3
        },
        line_linked: {
          enable: true,
          shadow: {
            enable: true,
            color: "pink",
            blur: 3
          }

        }
      }
    }}
      style={{
        
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)'
      }}
    />
<div class="blogpage" style={{ maxWidth: 600,  background: 'white'}}>

    <h1>Coderess</h1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted April 09, 2011</p>
  </div>
  </div>
  
 </div> );

