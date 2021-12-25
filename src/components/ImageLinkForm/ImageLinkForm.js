import React from "react";
import './ImageLinkForm.css'

export default function ImageLinkForm ({onInputChange, onSubmit}){
    return(
        <div>
            <p className='f3'>
               {'Aplikasyon pou rekonèk vizaj nan yon foto'} 
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button input className='w-30 grow f4 link ph3 pv2 dib bg-light-blue' onClick={onSubmit}>
                        Detekte
                    </button>
                </div>
            </div>
        </div>
    )
}

// Menm bagay sèlman avèk arrow function
// const ImageLinkForm = () => {
//     return(
//         <div>
//             <p className='f3'>
//                {'Aplikasyon pou rekonèk vizaj nan yon foto'} 
//             </p>
//             <div className='center'>
//                 <div className='form center pa4 br3 shadow-5'>
//                     <input className='f4 pa2 w-70 center' type='text'/>
//                     <button input className='w-30 grow f4 link ph3 pv2 dib bg-light-blue' >
//                         Detekte
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ImageLinkForm