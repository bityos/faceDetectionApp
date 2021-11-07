import React from "react";
import Tilt from 'react-tilt'
import './Logo.css'
import faceDetection from './face-recognition.png'

export default function Logo () {
    return(
        <div className="ma4 mt0 link pointer">
            <Tilt className="Tilt br3 shadow-2" options={{ max : 60 }} 
                style={{ height: 110, width: 110 }} >
                <div className="Tilt-inner">
                    <img className="logo pt3" alt='Logo' src={faceDetection}/>
                    <h6>Bityòs</h6>
                </div>
            </Tilt>
        </div>
    )
} 

// Menm bagay sèlman avèk arrow function
// const Logo = () => {
//     return(
//         <div className="ma4 mt0 link pointer">
//             <Tilt className="Tilt br3 shadow-2" options={{ max : 60 }} 
//                 style={{ height: 110, width: 110 }} >
//                 <div className="Tilt-inner">
//                     <img className="logo pt3" alt='Logo' src={faceDetection}/>
//                     <h6>Bityòs</h6>
//                 </div>
//             </Tilt>
//         </div>
//     )
// }
// export default Logo;