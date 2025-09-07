import React, { useState } from 'react';
import {InputBox} from './components/Index.js'; 
import useCurrencyInfo from './hooks/useCurrencyinfo';


function App() {
const [amount, setAmount] = useState();
const [fromCurrency, setFromCurrency] = useState('usd');
const [toCurrency, setToCurrency] = useState('inr');
const [convertedAmount, setConvertedAmount] = useState();
  
const currencyInfo= useCurrencyInfo(fromCurrency);
const Options = Object.keys(currencyInfo);

const swap= () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convert= ()=>{
  setConvertedAmount(amount*currencyInfo[toCurrency]  );
  }
return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url('https://imgs.search.brave.com/8lZp9yaZnt8EJcuU0GnZ1wrPMwYu9G92tdAoLp_IGWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2hhcmUteW91ci1m/YXZvcml0ZS1rYW9y/dWtvLXdhZ3VyaS1w/aWNzLXBsei12MC1z/ODNra3lpMHIyOWYx/LmpwZWc_d2lkdGg9/NzIwJmZvcm1hdD1w/anBnJmF1dG89d2Vi/cCZzPWZiZGFjNmNk/YWE1YjgwYzgxOGI3/NWRjZTlmNWEyNjE5/OWE3OWJhYTM')`}}>
    
   <div className='w-full'>
    <div className='max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
    <form onSubmit={(e) => {
      e.preventDefault();
      convert();
    }}
    >
      <div className='w-100 mb-1 mx-auto'>
      <InputBox
      label="From"
      amount={amount}
      onAmountChange={(amount) => setAmount(amount)}
      currencyOptions={Options}
      selectCurrency={fromCurrency}
      onCurrencyChange={(currency) => setFromCurrency(currency)}
      amountDisable={false}
      currencyDisable={false}
      className="mb-3"
      />
      </div>
      <div className="relative w-full h-0.5">
         <button
          type="button"
           className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-gray-700 transition-colors duration-300 hover:scale-105"
           onClick={swap} 
>
  Swap
</button>
</div>
      <div className='w-100 mb-1 mx-auto'>
      <InputBox
      label="To"
      amount={convertedAmount}
      onAmountChange={(amount) => setConvertedAmount(amount)}
      currencyOptions={Options}
      selectCurrency={toCurrency}
      onCurrencyChange={(currency) => setToCurrency(currency)}
      amountDisable={true}
      currencyDisable={false}
      className="mt-3"
      />
      </div>
      
      <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300 hover:scale-105 hover:bg-lime-300 hover:text-black'>
        Convert from {fromCurrency} to {toCurrency}
      </button>

    </form>


   </div>
</div>

    </div>
  
  )
}

export default App
