import React from 'react'
import QRCode from 'react-qr-code'

// ReactDOM.render(<QRCode value='hey' />, document.getElementById('Container'))
const QR = () => {
  const value =
    'upi://pay?pa=swebreza@okhdfcbank&amp;pn=MDSuwebReza &amp;cu=INR'
  return (
    <div>
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 64,
          width: '100%',
        }}
      >
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      QR
      <div>
        <div class='p-8'>Pay Now !</div>
      </div>
    </div>
  )
}

export default QR
