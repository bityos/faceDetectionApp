import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


export default function App() {
  return (
    <div className="App">
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