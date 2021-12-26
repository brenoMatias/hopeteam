import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import nextevent from './../images/nextevent.jpg';
import map1 from './../images/map1.png'

function Cards() {
  return (
    <div className='cards'>
      <div>
                <h1 class="animate__animated animate__heartBeat">Fique Ligado!</h1>
      </div>
       <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem className="card-item"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Próximo Evento'
              path='/services'
              src={nextevent}
              alt="lala"
            />
            <CardItem className="card-item"  
              src={map1}
              text='Rua Von Goethe, 348 - Cidade Nobre, Ipatinga - State of Minas Gerais'
              label='Como Chegar'
              path='/contato'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;