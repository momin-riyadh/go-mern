import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class CreateBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            isbn: '',
            author: '',
            description: '',
            published_date: '',
            publisher: '',
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            description: this.state.description,
            published_date: this.state.published_date,
            publisher: this.state.publisher,
        }

        axios.post('http://localhost:5050/api/books', data)
            .then(res => {
                this.setState({
                    title: '',
                    isbn: '',
                    author: '',
                    description: '',
                    published_date: '',
                    publisher: '',
                })
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="CreateBook">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <Link to='/' className="btn btn-outline-warning float-left">
                                    Show Book List
                                </Link>
                            </div>

                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Add Book</h1>
                                <p className="lead text-center">
                                    Create new book
                                </p>


                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                               className="form-control"
                                               name={'title'}
                                               placeholder="Title of the book"
                                               value={this.state.title}
                                               onChange={this.onChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='ISBN'
                                            name='isbn'
                                            className='form-control'
                                            value={this.state.isbn}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Author'
                                            name='author'
                                            className='form-control'
                                            value={this.state.author}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Describe this book'
                                            name='description'
                                            className='form-control'
                                            value={this.state.description}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input
                                            type='date'
                                            placeholder='published_date'
                                            name='published_date'
                                            className='form-control'
                                            value={this.state.published_date}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            placeholder='Publisher of this Book'
                                            name='publisher'
                                            className='form-control'
                                            value={this.state.publisher}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <input
                                        type="submit"
                                        className="btn btn-outline-warning btn-block mt-4"
                                    />
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateBook;
