import "./App.css";
import CreditCard from './CreditCard.jsx'

function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <CreditCard
          type="Visa"
          number="4562 5423 2436 3245"
          expirationMonth={5}
          expirationYear="2027"
          bank="OP"
          owner="John Smith"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010993"
          expirationMonth={3}
          expirationYear="2021"
          bank="S-pankki"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016982"
          expirationMonth={12}
          expirationYear="2019"
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;