import React from 'react'
import {AddBooksStyled, Button, ModalStyled} from './styles'
import {AddBooksContainer} from './container'
import Loader from '../loader'

class EditBooksModal extends React.Component {

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

    updateBookDetails = () => {
        const {bookName, bookGenre, bookDescr, bookCount, bookAuthor} = this.state
        const {ActionAddBooks, bookList, genres, closeAddBooksModal, onAddNewBookSuccess} = this.props
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

        })
        ActionAddBooks(copy)
        closeAddBooksModal()
        onAddNewBookSuccess()
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
            bookCount: e.target.valuesß
        })
    }

    render() {
        const {closeEditBooksModal, genres, isLoading, bookList} = this.props
        const {bookName, bookGenre, bookDescr, bookCount, bookAuthor} = this.state
            return <ModalStyled>
            {isLoading && <Loader />}
            <AddBooksStyled className="gdfg">
                <div className="header">
                    <h4 className="title">Edit Books</h4>
                    <span className="close-icon" onClick={closeEditBooksModal}>X</span>
                </div>
                <div className="add-items-wrapper">
                    <div className="add-items">
                        <label htmlFor="bookName" className="item-label">Book Name</label>
                        <input value={bookName} className="item-input" type="text" autoFocus={true} onChange={this.onNameChange}/>
                    </div>
                    <div className="add-items">
                        <label htmlFor="bookName" className="item-label">Genre</label>
                        <select className="item-input" value={bookGenre} onChange={this.onGenreChange}>
                            <option value="">None</option>
                            {genres.map(n => 
                                <option key={n.id} value={n.id}>{n.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="add-items">
                        <label htmlFor="bookName" className="item-label">Book Description</label>
                        <textarea value={bookDescr} className="item-input" type="textarea" rows="4" onChange={this.onDescrChange}/>
                    </div>
                    <div className="add-items">
                        <label htmlFor="bookName" className="item-label">Author</label>
                        <input className="item-input" value={bookAuthor} type="text" onChange={this.onAuthorChange}/>
                    </div>
                    <div className="add-items">
                        <label htmlFor="bookName" className="item-label">Count</label>
                        <input value={bookCount} className="" step="1" min="1" type="number" onChange={this.onCountChange}/>
                    </div>
                    <div className="add-books-btn-wrapper">
                        <Button onClick={this.updateBookDetails}>Update</Button>
                    </div>
                </div>
            </AddBooksStyled>
        </ModalStyled>
    }
}

export default EditBooksModal