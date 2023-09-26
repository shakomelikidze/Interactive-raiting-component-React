import { useState } from 'react'
import star from './images/icon-star.svg'
import thanks from './images/illustration-thank-you.svg'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");
  const Button = ({number}) => {
    return <button 
      onClick={() => setItems(number)}
      className='rating-btn-style'>{number}
    </button>
  }

  return (
    <>
      {!isSubmitted && (
        <div className='wrapper'>
        <div className='star-div'>
          <img src={star}/>
        </div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. 
          All feedback is appreciated to help us improve our offering!
        </p>
        <ul className='button-box'>
          <li><Button number={1} /></li>
          <li><Button number={2} /></li>
          <li><Button number={3} /></li>
          <li><Button number={4} /></li>
          <li><Button number={5} /></li>
        </ul>
        <div className='submit-div'>
          <button onClick={() => setIsSubmitted(true)} 
          className='btn-rating'>SUBMIT</button>  
        </div>
        </div>
      )}

      {isSubmitted && <ThankYou 
        items = {items}
        setIsSubmitted = {setIsSubmitted}/> 
      }
    </>
  );
}

const ThankYou = ({items, setIsSubmitted})=> {
  return (
    <div className='wrapper-window-two'>
      <img src={thanks}></img>
      <p className='choosed-number-text'>You selected {items} out of 5</p>
      <h2>Thank you</h2>
      <p className='thank-you-text'>
        We appreciate you taking the time to give a rating. 
        If you ever need more support, don’t hesitate to get in touch!
      </p>
      <div className='rate-again-div'>
          <button onClick={() => setIsSubmitted(false)} className='btn-rating mobile-btn'>RATE AGAIN</button>  
      </div>
    </div>
  )
}

export default App;
