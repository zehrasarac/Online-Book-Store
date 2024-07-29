import React from 'react';
import { ListGroup } from 'react-bootstrap';


function Basket({basket}) {

    const totalPrice = basket.reduce((total,item)=>total+parseFloat(item.price),0);
  return (
    <div>
      <h2>Sepet</h2>
      <ListGroup>
        {basket.map((book, index) => (
          <ListGroup.Item key={index}>
            {book.title} - {book.author} - {book.price}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p>Toplam: {totalPrice} TL</p>
    </div>
    
  );
}

export default Basket;
