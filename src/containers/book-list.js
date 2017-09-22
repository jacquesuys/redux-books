import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// use redux to return state as props
  // () wrapped as return to shield {}
const mapStateToProps = (state) => ({books: state.books});

// when selectBook(), dispatch to all reducers. Rehydrate state on the container
const mapDispatchToProps = (dispatch) => bindActionCreators({selectBook}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);