import React, { Component } from 'react';
import Login from '../containers/Login';
import Particles from 'react-particles-js';
import ReactDOM from 'react-dom';
import ParticlesConfig from './particles.json'
const LogInPage = ({shift}) => {
  return (
    <div className='LoginPage'>
    <div className='overlay'><Login/></div>
      <div id='particle'>
      <Particles
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3333ff",
                      blur: 0.4,
                      width: 1,
                      distance: 150
                    },
                  number: {
                    value: 80,
                    density: {
                      enbale: true,
                      value_area: 800
                    }
                  }
                  }
                }
              }}
              styles={{
                position: 'absolute',
              }}

            />
        </div>

    </div>
  )
}


export default LogInPage;