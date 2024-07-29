import React , { useState } from 'react';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Nav } from 'react-bootstrap';
import BookDetail from './components/BookDetail';
import Basket from './components/Basket';
import { Route,Routes,Link } from 'react-router-dom';

function App() {
  const [selectedBook,setSelectedBook] = useState(null);
  const [basket, setBasket] = useState([]);

  const addToBasket = (book) => {
    setBasket([...basket,book]);
  };


  return (
    <div className="App">
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Online Kitap Mağazası</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/basket">Sepet ({basket.length})</Nav.Link>
      </Nav>
    </Navbar>
    <Container>
      <Routes>
        <Route path="/" element={<Search onSelectBook={setSelectedBook} />} />
        <Route path="/book/:id" element={<BookDetail onAddbasket={addToBasket} />} />
        <Route path="/basket" element={<Basket basket={basket} />} />
      </Routes>
    </Container>
  </div>
  );
}

export default App;
