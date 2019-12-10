import React from 'react'
import Container from './container'
import {ContainerStyled, GenreCard, GenreWrapper, Button} from './styles'
import Loader from '../loader'
import Books from '../mock-data/books'
import AddBookModal from './AddBooksModal'
import EditBookModal from './EditBookModal'
import {debounce} from 'lodash';
import PencilIcon from '../images/pencil.png'

// const bookList = {
//     fantasy: [
//         {
//             "id": "1",
//             "name": "fantasy fantasy fantasy",
//             "count": 1
//         }, {
//             "id": "2",
//             "name": "fantasy fantasy fantasy",
//             "count": 4
//         }
//     ],
//     thriller: [
//         {
//             "id": "3",
//             "name": "thriller thriller thriller",
//             "count": 5
//         }, {
//             "id": "4",
//             "name": "thriller thriller thriller",
//             "count": 2
//         }
//     ]
// }

class Home extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            showAddBookModal: false,
            showEditBookModal: false,
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
        // const {bookList} = this.props
        // if (!!bookList && prevProps.bookList !== bookList) {
        //     this.setState({
        //         releventBookList: bookList
        //     })
        // }
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
    

    onAddNewBookSuccess = () => {
        this.setState({
            bookListUpdated: true
        })
    }

    openEditBooksModal = () => {
        this.setState({
            showEditBookModal: true
        })
    }

    closeEditBooksModal = () => {
        this.setState({
            showEditBookModal: false
        })
    }


    render () {
        const {isLoading, genres, bookList} = this.props
        const {showAddBookModal, searchText, releventBookList, showEditBookModal} = this.state

        return (
            <ContainerStyled>
                {showAddBookModal && <AddBookModal closeAddBooksModal={this.closeAddBooksModal} onAddNewBookSuccess={this.onAddNewBookSuccess}/>}
                {showEditBookModal && <EditBookModal closeEditBooksModal={this.closeEditBooksModal} />}
                {isLoading && <Loader />}
                <div className="top-actions">
                    <input className="search-book-input" type="serach" value={searchText} onChange={this.onSearchText}/>
                    <Button className="add-book-btn" onClick={this.openAddBooksModal}>Add Books</Button>
                </div>
                {!!genres && !!genres.length && <GenreWrapper>
                    {genres.map(genre => <GenreCard key={genre.id}>
                        <div className="genre-name">{genre.name}</div>
                        <div className="genre-books">
                            {(!!releventBookList[genre.id] && !!releventBookList[genre.id].length) ? releventBookList[genre.id].map(book => 
                                <div className="book-name-count" key={book.id}>
                                    <span className="book-name">{book.name}</span>
                                    <img src={PencilIcon} alt="edit" className="edit-book-icon" onClick={this.openEditBooksModal}/>
                                </div>
                            ) : <div className="no-books-msg">No books present</div>}
                        </div>
                    </GenreCard>)}
                </GenreWrapper>}
            </ContainerStyled>
        );
    }
}

export default Container(Home)