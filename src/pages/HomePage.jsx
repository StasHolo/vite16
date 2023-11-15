import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () =>  {
    //const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const cash = useSelector (state => state.cash.cash)
    const customers = useSelector (state => state.customers.customers)
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [viewedCustomer, setViewedCustomer] = useState(null);
  
    const addCustomer = (name) => {
      const customer = {
        name,
        id: Date.now(),
      }
      dispatch({type:"ADD_CUSTOMER", payload: customer})
  }
  
  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer });
  }
  
  const changeInfo = (customerId, info) => ({
    type: "CHANGE_INFO",
    payload: { id: customerId, info },
  })
  
  const changeCustomerInfo = (customerId, info) => {
    dispatch(changeInfo(customerId, info));
    closeModal(); 
  };
  
  const openModal = (customerId) => {
    const customer = customers.find(cust => cust.id === customerId);
    setCurrentCustomer(customer);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setCurrentCustomer(null);
    setIsModalOpen(false);
  };
  
  const viewCustomer = (customerId) => {
    const customer = customers.find(cust => cust.id === customerId);
    setViewedCustomer(customer);
  };
  
    return (
      <>
      <div>
        {customers.length > 0 ?
        <div className='track-list'>
          
          {customers.map(customer => (
            <div className='track' key={customer.id}>
                <p>Название: {customer.name}</p>
                <p>Описание: {customer.info}</p>
                <div onClick={() => openModal(customer.id)}>Изменить</div>
                <div onClick={() => removeCustomer(customer.id)}>Удалить</div>
            </div>
  ))}
              
        </div>
        :
        <div style={{fontSize: "2rem"}}>
            Музыкальный плейлист пуст
        </div>
        
  }
  <div>
          <button onClick={() => addCustomer(prompt())}>Добавть трек</button>
        </div>
      </div>
  
      {isModalOpen && (
    <div className="modal">
      <h2>Редактировать информацию о клиенте</h2>
      <p>Имя клиента: {currentCustomer.name}</p>
      <p>Описание: {currentCustomer.info}</p>
      <input
        type="text"
        value={currentCustomer.info}
        onChange={(e) => setCurrentCustomer({ ...currentCustomer, info: e.target.value })}
      />
      <div>
      <button onClick={closeModal}>Закрыть</button>
      <button onClick={() => changeCustomerInfo(currentCustomer.id, currentCustomer.info)}>Сохранить</button>
      </div>
    </div>
  )}
  {viewedCustomer && (
    <div className="customer-info">
      <h2>Информация о клиенте</h2>
      <p>Имя клиента: {viewedCustomer.name}</p>
      <p>Информация: {viewedCustomer.info}</p>
      <button onClick={() => setViewedCustomer(null)}>Закрыть</button>
    </div>
  )}
      </>
    )
  }

  export {HomePage}