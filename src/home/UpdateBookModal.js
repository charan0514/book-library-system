import React from 'react'
import {AddBooksStyled, Button, ModalStyled} from './styles'
import {EditBooksContainer} from './container'
import Loader from '../loader'

class UpdateBookModal extends React.Component {

    constructor (props) {
        super(props)
        const {bookDetails} = props;
        this.state= {
            bookName: bookDetails.name,
            bookGenre: bookDetails.genre,
            bookDescr: bookDetails.description,
            bookCount: bookDetails.count,
            bookAuthor: bookDetails.author
        }
    }

    updateBookDetails = () => {
        const {bookName, bookGenre, bookDescr, bookCount, bookAuthor} = this.state
        const {ActionUpdateBookList, bookList, genres, closeEditBooksModal, onBookListUpdate, bookDetails} = this.props
        const copy = JSON.parse(JSON.stringify(bookList))
        const index = copy[bookGenre].findIndex(n => n.id === bookDetails.id)
        copy[bookGenre].splice(index, 1, {id: bookDetails.id, name: bookName, genre: bookGenre, description: bookDescr, count: bookCount, author: bookAuthor})
        ActionUpdateBookList(copy)
        closeEditBooksModal()
        onBookListUpdate()
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
        const {closeEditBooksModal, genres, isLoading, bookList} = this.props
        const {bookName, bookGenre, bookDescr, bookCount, bookAuthor} = this.state
            return <ModalStyled>
            {isLoading && <Loader />}
            <AddBooksStyled className="gdfg">
                <div className="header">
                    <h4 className="title">Update Book Details</h4>
                    <span className="close-icon" onClick={closeEditBooksModal}>X</span>
                </div>
                <div className="add-items-wrapper">
                    <div className="add-items">
                        <label className="item-label">Book Name</label>
                        <input value={bookName} className="item-input" type="text" autoFocus={true} onChange={this.onNameChange}/>
                    </div>
                    <div className="add-items">
                        <label className="item-label">Genre</label>
                        <select className="item-input" value={bookGenre} onChange={this.onGenreChange} disabled>
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
                        <Button onClick={this.updateBookDetails}>Update</Button>
                    </div>
                </div>
            </AddBooksStyled>
        </ModalStyled>
    }
}

export default EditBooksContainer(UpdateBookModal)