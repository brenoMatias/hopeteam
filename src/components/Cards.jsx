import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fique Ligado</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
            //   src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Próximo Evento'
              path='/services'
            />
            <CardItem
            //   src='images/img-2.jpg'
              text='Rua Van Goeh 420?'
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