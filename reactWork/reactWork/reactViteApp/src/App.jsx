import { useState } from 'react'

import './App.css'
import Student from './Student'
import Navbar from './Navbar'
// import image from "./../public/download.jpeg"
import StudentState from './StudentState'
import UseOfState from './UseOfState'
import ImageManipulation from './imageManipulation'


function App() {
  // const [count, setCount] = useState(0)

  // const data={
  //   name: 'Aryan Verma',
  //   dob: '07/01/2004',
  //   roll_no: '2200320100034',
  //   course: 'Computer science and Engineering',
  //   image: image,
  // }

//   return (
//     <>
//       <Navbar />
//       <div className='component'>

//         <Student data={data}/>
//         <Student data={data}/>
//         <Student data={data}/>
//         <Student data={data}/>
//         {/* <Student
//           image={image}
//           name={"Ayush singh"}
//           dob={"26/09/2004"}
//           roll_no={"2200320100048"}
//           course={"Computer science and Engineering"}
//         />
//         */}
//       </div>
//     </>
//   )

// }
// Student.defaultProps = {
//   college: 'ABES Engineering University'
// }
// return (
//   <StudentState/>
// )
return (
  <div>
    <ImageManipulation/>
  </div>
)
}
export default App