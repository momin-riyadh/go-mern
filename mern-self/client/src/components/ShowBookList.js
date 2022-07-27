import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../App.css';
import BookCard from "./BookCard";

class ShowBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5050/api/books')
            .then(res => {
                this.setState({
                    books: res.data
                });
            })
            .catch(err => {
                console.log("Error in ShowBookList!");
            })
    }


    render() {
        const books = this.state.books;
        let bookList;
        if (books.length > 0) {
            bookList = books.map(book => {
                return (
                    <BookCard key={book._id} book={book}/>
                )
            })
        } else {
            bookList = <p>No books found</p>
        }

        return (
            <div className="ShowBookList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <h2 className="display-4 text-center">Books List</h2>
                        </div>

                        <div className="col-md-11">
                            <Link to="/create-book" className="btn btn-outline-warning float-right">
                                + Add New Book
                            </Link>
                            <hr/>
                        </div>

                    </div>

                    <div className="list">
                        {bookList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowBookList;
