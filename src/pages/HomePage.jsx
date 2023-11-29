import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button} from 'react-bootstrap';
import collapse from "bootstrap/js/src/collapse";

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
            <div className="accordion" id={`accordionExample-${customer.id}`} key={customer.id}>
              <div className="accordion-item">
              <h2 className="accordion-header" id={`heading-${customer.id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${customer.id}`} aria-expanded="true" aria-controls={`collapse-${customer.id}`}>
                Название: {customer.name}
                </button>
              </h2>
              <div id={`collapse-${customer.id}`} className="accordion-collapse collapse" aria-labelledby={`heading-${customer.id}`} data-bs-parent={`#accordionExample-${customer.id}`}>
                <div className="accordion-body">
                <p>Описание: {customer.info}</p>
                <Button variant='dark' onClick={() => openModal(customer.id)}>Изменить</Button>
                <Button variant='light' onClick={() => removeCustomer(customer.id)}>Удалить</Button>
                </div>
              </div>
                
                </div>
            </div>
  ))}
              
        </div>
        :
        <div style={{fontSize: "2rem"}}>
            Музыкальный плейлист пуст
        </div>
        
  }
        <div className='addBut'>
          <Button variant="primary" onClick={() => addCustomer(prompt())}>Добавть трек</Button>
        </div>
      </div>
  
      {isModalOpen && (
    <div className="modall">
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