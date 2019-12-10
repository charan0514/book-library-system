import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getGenreIsFetching,
  getGenreFetchSuccess,
  getBookListSuccess
 } from '../selectors'

import * as loginActions from '../actions'

const mapStateToProps = (state) => {
  return {
      genres : getGenreFetchSuccess(state),
      isLoading: getGenreIsFetching(state),
      bookList: getBookListSuccess(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...loginActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)

const addBooksMapStateToProps = (state) => {
  return {
      genres : getGenreFetchSuccess(state),
      bookList: getBookListSuccess(state)
  }
}

const addBooksMapDispatchToProps = (dispatch) => {
  return bindActionCreators({...loginActions}, dispatch)
}

export const AddBooksContainer = connect(addBooksMapStateToProps, addBooksMapDispatchToProps)


const editBooksMapStateToProps = (state) => {
  return {
      genres : getGenreFetchSuccess(state),
      bookList: getBookListSuccess(state)
  }
}

const editBooksMapDispatchToProps = (dispatch) => {
  return bindActionCreators({...loginActions}, dispatch)
}

export const EditBooksContainer = connect(editBooksMapStateToProps, editBooksMapDispatchToProps)

