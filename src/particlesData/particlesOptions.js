//https://code.tutsplus.com/tutorials/particles-js-control-particle-count-and-shape--cms-26290

const rainOptions = {
    particles: {
      number: {
        value: 20,
        density: {
          enable: false,
        },
      },
      shape: {
        type: ["circle"],
        // image: {
        //   src: "https://media.licdn.com/dms/image/C4D03AQH-IsICbaHY6A/profile-displayphoto-shrink_100_100/0/1598280247239?e=1678924800&v=beta&t=R50TLUrWJW8W10wJ3MlIyPKdw4oLGcu9j9eZbuwllnI",
        //   width: 1,
        //   height: 1,
        // },
      },
      "size": {
          "value": 100, 
          "random": true,
          "anim": {
            "enable": true,
            "speed": 20,
            "size_min": 10,
            "sync": false
          }
        },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 10,
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
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
      },
    },
  };
  
  export default rainOptions;
  