import React from 'react'
import Container from './container'
import {ContainerStyled, GenreCard, GenreWrapper, Button} from './styles'
import Loader from '../loader'
import AddBookModal from './AddBooksModal'
import UpdateBookModal from './UpdateBookModal'
import {debounce} from 'lodash';
import PencilIcon from '../images/pencil.png'

class Home extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            showAddBookModal: false,
            currentBookDetails: null,
            searchText: "",
            releventBookList: {},
            bookListUpdated: false
        };
    }

    componentDidMount() {
        const {ActionFetchGenres, bookList} = this.props
        ActionFetchGenres()
        this.setState({
            releventBookList: bookList
        })
        
    }

    componentDidUpdate(prevProps, prevState) {
        const {bookList} = this.props
        if (!!bookList && prevProps.bookList !== bookList) {
            this.setState({
                releventBookList: bookList
            })
        }
    }

    debounceHandler = debounce((val) => { 
        this.searchBooks(val);
    }, 1000, {leading: false, trailing: true});

    
    onSearchText = (e) => {
        const {value} = e.target
        this.setState({
            searchText: value
        })
        this.debounceHandler(value)
    }

    getReleventBookList = (value) => {
        const {bookList} = this.props
        const {searchText, applySearchByName, releventBookList} = this.state
        let newBookList = {}
        if (!!value) {
            const searchKey = value.toLowerCase()
            for (let key in bookList) {
                newBookList[key] = bookList[key].filter(n => {
                    return n.name.toLowerCase().includes(searchKey)
                })
            }
        } else {
            newBookList = bookList
        }
        this.setState({
            releventBookList: newBookList
        })
    }

    searchBooks = (value) => {
        this.getReleventBookList(value)
    }

    openAddBooksModal = () => {
        this.setState({
            showAddBookModal: true
        })
    }

    closeAddBooksModal = () => {
        this.setState({
            showAddBookModal: false
        })
    }
    

    onBookListUpdate = () => {
        // const {bookList} = this.props
        // this.setState({
        //     searchText: "",
        //     releventBookList: bookList
        // })
    }

    openEditBooksModal = (book) => {
        this.setState({
            currentBookDetails: book
        })
    }

    closeEditBooksModal = () => {
        this.setState({
            currentBookDetails: null
        })
    }

    addNewBooks = (bookDetails) => {
        const {ActionUpdateBookList, bookList} = this.props
        const copy = JSON.parse(JSON.stringify(bookList))
        if (!copy[bookDetails.bookGenre]) {
            copy[bookDetails.bookGenre] = []
        }
        copy[bookDetails.bookGenre].unshift({
            bookId: new Date().getTime().toString(),
            name: bookDetails.bookName, 
            count: bookDetails.bookCount,
            author: bookDetails.bookAuthor,
            description: bookDetails.bookDescr,
        })
        ActionUpdateBookList(copy)
        this.closeAddBooksModal()
    }

    updateBookDetails = (bookDetails) => {
        const {ActionUpdateBookList, bookList} = this.props
        const copy = JSON.parse(JSON.stringify(bookList))
        const {bookGenre} = bookDetails
    
        const index = copy[bookGenre].findIndex(n => n.bookId === bookDetails.bookId)
        copy[bookGenre].splice(index, 1, bookDetails)

        ActionUpdateBookList(copy)
        this.closeEditBooksModal()
    }


    render () {
        const {isLoading, genres, bookList} = this.props
        const {showAddBookModal, searchText, releventBookList, currentBookDetails} = this.state
        return (
            <ContainerStyled>
                {showAddBookModal && <AddBookModal closeAddBooksModal={this.closeAddBooksModal} onBookListUpdate={this.onBookListUpdate}/>}
                {currentBookDetails && <UpdateBookModal closeEditBooksModal={this.closeEditBooksModal} onBookListUpdate={this.onBookListUpdate} bookDetails={currentBookDetails}/>}
                {isLoading && <Loader />}
                <div className="top-actions">
                    <div>
                        {/* <label htmlFor="serachBook" className="search-book-label">Search by Name</label> */}
                        <input id="serachBook" placeholder="Search book by name" className="search-book-input" type="serach" value={searchText} onChange={this.onSearchText}/>
                    </div>
                    <Button className="add-book-btn" onClick={this.openAddBooksModal}>Add Books</Button>
                </div>
                {!!genres && !!genres.length && <div className="grid-outer"><GenreWrapper>
                    {genres.map(genre => <GenreCard key={genre.id}>
                        <div className="genre-name">{genre.name}</div>
                        <div className="genre-books">
                            {(!!releventBookList[genre.id] && !!releventBookList[genre.id].length) ? releventBookList[genre.id].map(book => 
                                <div className="book-name-count" key={book.id}>
                                    <span className="book-name">{book.name}</span>
                                    <img src={PencilIcon} alt="edit" className="edit-book-icon" onClick={(e) => this.openEditBooksModal(book)}/>
                                </div>
                            ) : <div className="no-books-msg">No books present</div>}
                        </div>
                    </GenreCard>)}
                </GenreWrapper></div>}
            </ContainerStyled>
        );
    }
}

export default Container(Home)