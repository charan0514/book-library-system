// import React from 'react'
// import {AddBooksStyled, Button, ModalStyled} from './styles'
// import {AddBooksContainer} from './container'
// import Loader from '../loader'

// export default function BookDetails(props) {
    
//         const {closeAddBooksModal, genres, bookName, bookGenre, bookCount, bookDescr, bookAuthor, modalTitle} = props

//         return <AddBooksStyled>
//             <div className="header">
//                 <h4 className="title">{modalTitle}</h4>
//                 <span className="close-icon" onClick={closeAddBooksModal}>X</span>
//             </div>
//             <div className="add-items-wrapper">
//                 <div className="add-items">
//                     <label htmlFor="bookName" className="item-label">Book Name</label>
//                     <input value={bookName} className="item-input" type="text" autoFocus={true} onChange={this.onNameChange}/>
//                 </div>
//                 <div className="add-items">
//                     <label htmlFor="bookName" className="item-label">Genre</label>
//                     <select className="item-input" value={bookGenre} onChange={this.onGenreChange}>
//                         <option value="">None</option>
//                         {genres.map(n => 
//                             <option key={n.id} value={n.id}>{n.name}</option>
//                         )}
//                     </select>
//                 </div>
//                 <div className="add-items">
//                     <label htmlFor="bookName" className="item-label">Book Description</label>
//                     <textarea value={bookDescr} className="item-input" type="textarea" rows="4" onChange={this.onDescrChange}/>
//                 </div>
//                 <div className="add-items">
//                     <label htmlFor="bookName" className="item-label">Author</label>
//                     <input className="item-input" value={bookAuthor} type="text" onChange={this.onAuthorChange}/>
//                 </div>
//                 <div className="add-items">
//                     <label htmlFor="bookName" className="item-label">Count</label>
//                     <input value={bookCount} className="" step="1" min="1" type="number" onChange={this.onCountChange}/>
//                 </div>
//                 <div className="add-books-btn-wrapper">
//                     <Button onClick={this.addNewBooks}>Add Books</Button>
//                 </div>
//             </div>
//         </AddBooksStyled>
    
// }