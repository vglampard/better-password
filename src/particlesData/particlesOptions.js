const particlesOptions = {
    
    particles: {
      number: {
        value: 10,
        density: {
          enable: false,
        },
      },
      "color": {
        "value": "#faf5f5"
      },
      shape: {
        type: ["circle"],
      },
      "size": {
          "value": 200, 
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 20,
            "sync": false
          }
        },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 5,
        random: false,
        straight: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };
  
  export default particlesOptions;
  