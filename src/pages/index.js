import React from "react"
import Typography from "typography";
import Particles from "react-particles-js";

export default () => (
  <div>
    <Particles params={{
      particles: {
        number: {
          value: 120
        },
        size: {
          value: 1
        },
        line_linked: {
          distance: 90,
          enable: true,
          shadow: {
            enable: true,
            color: "pink",
            blur: 5
          }

        }
      }
    }}
      style={{
        background: 'black',
        width: '100%'
      }}
    />

  </div>);

