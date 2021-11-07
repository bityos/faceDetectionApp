import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


export default function App() {
  return (
    <div className="App">
      <Navigation/>
       <Logo/>
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