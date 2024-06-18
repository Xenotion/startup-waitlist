import './App.css'

function App() {

  return (
    <>
      <div className='block'>
        
        <div className='title-section'>
          <div className='title'>___ until the grand opening</div>
          <div className='subtitle'>Join the waiting list and embrace for revolution</div>
        </div>
        
        <div className='input-section'>
          <input className='email-input' placeholder='enter your email address'></input>
          <button className='join-button'>Join</button>
        </div>

        <div className='count-section'>
          <div className='count-title'>Number of innovators waiting for you:</div>
          <div className='join-count'>0</div>
        </div>
        
      </div>    
    </>
  )
}

export default App
