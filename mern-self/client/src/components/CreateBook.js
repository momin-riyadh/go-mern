import React, {Component} from 'react';
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

        axios.post('http://localhost:5000/api/books', data)
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
                                <link to='/' className="btn btn-outline-warning float-left">
                                    Show Book List
                                </link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateBook;
