import React from 'react'
import {AddBooksStyled, Button, ModalStyled} from './styles'
import {AddBooksContainer} from './container'
import Loader from '../loader'

class AddBooksModal extends React.Component {

    constructor (props) {
        super(props)
        this.state= {
            bookName: "",
            bookGenre: "",
            bookDescr: "",
            bookCount: "",
            bookAuthor: ""
        }
    }

    addNewBooks = () => {
        const {bookName, bookGenre, bookDescr, bookCount, bookAuthor} = this.state
        const {ActionUpdateBookList, bookList, closeAddBooksModal, onBookListUpdate} = this.props
        const copy = JSON.parse(JSON.stringify(bookList))
        if (!copy[bookGenre]) {
            copy[bookGenre] = []
        }
        copy[bookGenre].unshift({
            id: new Date().getTime().toString(),
            name: bookName, 
            count: bookCount,
            author: bookAuthor,
            description: bookDescr,
            genre: bookGenre
        })
        ActionUpdateBookList(copy)
        onBookListUpdate()
        closeAddBooksModal()
    }

    onNameChange = (e) => {
        this.setState({
            bookName: e.target.value
        })
    }

    onGenreChange = (e) => {
        this.setState({
            bookGenre: e.target.value
        })
    }

    onDescrChange = (e) => {
        this.setState({
            bookDescr: e.target.value
        })
    } 

    onAuthorChange = (e) => {
        this.setState({
            bookAuthor: e.target.value
        })
    }

    onCountChange = (e) => {
        this.setState({
            bookCount: e.target.value
        })
    }

    render() {
        const {closeAddBooksModal, genres, isLoading} = this.props
        const {bookName, bookGenre, bookDescr, bookCount, bookAuthor} = this.state

        return <ModalStyled>
            {isLoading && <Loader />}
            <AddBooksStyled>
                <div className="header">
                    <h4 className="title">Add Books</h4>
                    <span className="close-icon" onClick={closeAddBooksModal}>X</span>
                </div>
                <div className="add-items-wrapper">
                    <div className="add-items">
                        <label className="item-label">Book Name</label>
                        <input value={bookName} className="item-input" type="text" autoFocus={true} onChange={this.onNameChange}/>
                    </div>
                    <div className="add-items">
                        <label className="item-label">Genre</label>
                        <select className="item-input" value={bookGenre} onChange={this.onGenreChange}>
                            <option value="">None</option>
                            {genres.map(n => 
                                <option key={n.id} value={n.id}>{n.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="add-items">
                        <label className="item-label">Book Description</label>
                        <textarea value={bookDescr} className="item-input" type="textarea" rows="4" onChange={this.onDescrChange}/>
                    </div>
                    <div className="add-items">
                        <label className="item-label">Author</label>
                        <input className="item-input" value={bookAuthor} type="text" onChange={this.onAuthorChange}/>
                    </div>
                    <div className="add-items">
                        <label className="item-label">Count</label>
                        <input value={bookCount} className="" step="1" min="1" type="number" onChange={this.onCountChange}/>
                    </div>
                    <div className="add-books-btn-wrapper">
                        <Button onClick={this.addNewBooks}>Add</Button>
                    </div>
                </div>
            </AddBooksStyled>
        </ModalStyled>
    }
}

export default AddBooksContainer(AddBooksModal)