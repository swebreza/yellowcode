import './App.css'
import Main from './components/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QR from './components/QR'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/qr' element={<QR />} />
        </Routes>
      </BrowserRouter>
      <Main />
    </div>
  )
}

export default App
//  <Route
//             path='/upi'
//             component={() => {
//               window.location.href =
//                 'upi://pay?pa=swebreza@okhdfcbank&amp;pn=MDSuwebReza &amp;cu=INR'
//               return null
//             }}
//           />
