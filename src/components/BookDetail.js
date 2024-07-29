import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';


function BookDetail({onAddbasket}) {
  const {id} = useParams();
  const [book,setBook] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost/online-book-store/backend/book.php?book_id=${id}`);
        const data = await response.json();
        if (data && data.book_id) {  // Eğer veri var ise ve `book_id` alanı varsa
          setBook(data);
        } else {
          console.error('No data found for the given book_id');
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };
    

    fetchBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <Card.Text>{book.description}</Card.Text>
        <Card.Text>Fiyat: {book.price} TL</Card.Text>
        <Button variant="primary" onClick={() => onAddbasket(book)}>Sepete Ekle</Button>
      </Card.Body>
    </Card>
  );
};


export default BookDetail;
