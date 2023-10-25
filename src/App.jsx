import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SecondPage } from './pages/SecondPage'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  //const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const cash = useSelector (state => state.cash.cash)
  const customers = useSelector (state => state.customers.customers)

  console.log(cash)

  const addCash = (cash) => {
      dispatch({type:"ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      info: '',
      id: Date.now(),
    }
    dispatch({type:"ADD_CUSTOMER", payload: customer})
}

const removeCustomer = (customer) => {
  dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
}

const changeInfo = (info) => {
  customer.info = info
}

  return (
    <>
    <div>
      <h1>Music playlist</h1>
    </div>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/SecondPage'>Second page</Link>
      </header>

    <div>
      
      <div>
        <button onClick={() => addCustomer(prompt())}>Добавть клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
      {customers.length > 0 ?
      <div>
        
          {customers.map(customer =>(
            <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem"}} key={customer.id}>{customer.name}<div onClick={() => changeInfo(prompt())} key={customer.id}>Изменить</div></div>
            
            )
            )}
            
      </div>
      :
      <div style={{fontSize: "2rem"}}>
          Клиенты отсутствуют
      </div>
}
    </div>

      <Routes>
        
      <Route path='/SecondPage' element={<SecondPage />} />
      </Routes>
    </>
  )
}

export default App
