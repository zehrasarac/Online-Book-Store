import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, InputGroup,ListGroup } from 'react-bootstrap';

const Search = ({ onSelectBook }) => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost/online-book-store/backend/search.php?search=${search}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };


  return (
    <div>
      <Form onSubmit={handleSearch}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Ara"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="primary" type="submit">Ara</Button>
        </InputGroup>
      </Form>
      <ListGroup>
        {books.map((book) => (
          <ListGroup.Item key={book.book_id}>
            {book.title} - {book.author}
            <Link to={`/book/${book.book_id}`}>
              <Button variant="link" className="float-end">Detay</Button>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
);
}

export default Search;
