import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) return <div>No Book selected</div>;
    return (
      <div>
       <div>Details for: {this.props.book.title}</div>
       <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({book: state.activeBook});

export default connect(mapStateToProps)(BookDetail);