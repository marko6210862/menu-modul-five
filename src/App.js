import { useState } from 'react';
import { data } from './data';

import './App.css';


function App(){
  
  const [dish, setDish] = useState (0);
  const {id, name, image, description, energy, price, showMore } = data[dish];
  const [showText, setShowText] = useState (false);
  
  const showTextClick = (data) => {
    data.showMore = !data.showMore
    setShowText ( !showText )
  }

  const removeDish = (id) => {
  console.log (id)  
  let newDishes = data.filter(dishes => dishes.id !== id) 
  console.log (newDishes) 
  nextDish  (newDishes)
  }
 
  const perviousDish = () => {
    setDish (( dish => {
      dish --;
      if(dish < 0){
        return data.length-1;
      }
      return dish;
    }))
  }

  const nextDish = () => {
    setDish ((dish => {
      dish ++;
      if (dish > data.length -1){
        dish = 0
      }
      return dish;
    }))
  } 


return (
  
  <div className='container'>
  
    return (
      <div key={id}>
        <div className='header'>
                <div className='container-name'>
                  <p>{id} {name}</p>
                </div>
              
                <div className='container-image'>
                    <div className='btn'>
                      <button className='next' onClick={perviousDish}>⬅</button>
                    </div>  
                  <img src = {image} width="450px" height="450px" alt="dish"/>
                    <div className='btn'>  
                      <button className='next' onClick={nextDish}>➡</button>
                    </div>
                </div>

                <div className='container-text'>
                  <p className='text'>{showMore ? description : description.substring(0,60) + "..." }
                    <button className='show' onClick={() => showTextClick (data[dish])}>{showMore ? "show less" : "show more"}</button>
                  </p>
                </div>
                 <div className='container-text'>
                    <p>ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ: {energy} Ккал</p>
                </div>
                <div className='container-text'>
                    <p>Цена: {price} рублей</p>
                </div>
                <div className='container-text'>
                    <button className='remove' onClick={() => removeDish (id)}>Remove</button>
                </div>
        </div>
      </div>
  )  
   
        <div className='container'>
          <button className='btn-del' onClick={() => setDish ([])}> Delete all</button>
        </div>
  </div>

  )
  }


export default App;
