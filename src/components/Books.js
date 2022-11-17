import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { AddBookFunction, getBooksFunction, RemoveBookFunction } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.BooksReducer);

  useEffect(() => {
    dispatch(getBooksFunction());
  }, []);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(AddBookFunction(NewBook));
  };
  const RemoveDisplayedBook = (id) => {
    dispatch(RemoveBookFunction(id));
  };
  return (
    <>
      {StoredBook.map((item) => (
        <Book
          category={item.category}
          title={item.title}
          key={item.id}
          author={item.author}
          id={item.id}
          RemoveDisplayedBook={RemoveDisplayedBook}
        />
      ))}
      <AddBook AddNewBook={AddNewBook} />
    </>
  );
};

export default Books;
