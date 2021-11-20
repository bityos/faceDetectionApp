import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";

export default function App() {
  const particlesInit = (main) => {};
  const particlesLoaded = (container) => {};
  const options={
    fpsLimit: 60,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  } 
  return (
    <div className="App">
     <Particles className='particles'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={options}
      />
      <Navigation/>
       <Logo/>
       <Rank/>
      <ImageLinkForm/>
      {/*<FaceDetection/> */}
    </div>
  );
}

// Menm bagay sèlman avèk arrow function
// const App = () => {
//   return (
//     <div className="App">
//       <Navigation/>
//        <Logo/>
//       {/*<ImageLinkForm/>
//       <FaceDetection/> */}
//     </div>
//   );
// }

// export default App