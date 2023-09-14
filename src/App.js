import React, { useState } from 'react'
import Header from './components/Header';
import InputForm from './components/InputForm';
import Table from './components/Table';


function App() {

  const [ userInput, setUserInput] = useState(null)
  
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }
  const yearlyData = []
    
  if(userInput) {
    let currentSavings=userInput['current-savings']
    const yearlyContribution = userInput['yearly-contribution']
    const expectedReturn = userInput['expected-return']/100
    const duration = userInput['duration']

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
  };

  return (
    <div>
      <Header />
      <InputForm onCalculate={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
     {!userInput && <p style={{textAlign:'center'}}>No investment calculated yet</p>} 
     {userInput && <Table tableData={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
