import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SecondPage = () => {

const dispatch = useDispatch()
const cash = useSelector (state => state.cash.cash)
const genres = useSelector (state => state.genres.genres)
const [isModalOpen, setIsModalOpen] = useState(false);
const [currentGenre, setCurrentGenre] = useState(null);
const [viewedGenre, setViewedGenre] = useState(null);

const addGenre = (name) => {
    const genre = {
      name,
      id: Date.now(),
    }
    dispatch({type:"ADD_GENRE", payload: genre})
}

const removeGenre = (genre) => {
    dispatch({ type: "REMOVE_GENRES", payload: genre });
  }
  
  const changeInfo = (genreId, info) => ({
    type: "CHANGE_INFO_GENRE",
    payload: { id: genreId, info },
  })
  
  const changeGenreInfo = (genreId, info) => {
    dispatch(changeInfo(genreId, info));
    closeModal(); 
  };
  
  const openModal = (genreId) => {
    const genre = genres.find(cust => cust.id === genreId);
    setCurrentGenre(genre);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setCurrentGenre(null);
    setIsModalOpen(false);
  };
  
  const viewGenre = (genreId) => {
    const genre = genres.find(cust => cust.id === genreId);
    setViewedGenre(genre);
  };

    return (
        <>
        <div>

            <h1> Музкальные жанры </h1>
        </div>

<div>
{genres.length > 0 ?
<div className='track-list'>
  
  {genres.map(genre => (
    <div className='track' key={genre.id}>
        <p>Название: {genre.name}</p>
        <div onClick={() => openModal(genre.id)}>Изменить</div>
        <div onClick={() => removeGenre(genre.id)}>Удалить</div>
    </div>
))}
      
</div>
:
<div style={{fontSize: "2rem"}}>
    Список жанров пуст
</div>

}
<div>
  <button onClick={() => addGenre(prompt())}>Добавть жанр</button>
</div>
</div>

{isModalOpen && (
<div className="modal">
<h2>Редактировать информацию о клиенте</h2>
<p>Имя клиента: {currentGenre.name}</p>
<p>Новое название: {currentGenre.info}</p>
<input
type="text"
value={currentGenre.info}
onChange={(e) => setCurrentGenre({ ...currentGenre, info: e.target.value })}
/>
<div>
<button onClick={closeModal}>Закрыть</button>
<button onClick={() => changeGenreInfo(currentGenre.id, currentGenre.info)}>Сохранить</button>
</div>
</div>
)}
{viewedGenre && (
<div className="customer-info">
<h2>Информация о клиенте</h2>
<p>Имя клиента: {viewedGenre.name}</p>
<p>Информация: {viewedGenre.info}</p>
<button onClick={() => setViewedGenre(null)}>Закрыть</button>
</div>
)}
</>
    )
}

export {SecondPage}