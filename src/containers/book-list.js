import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';



class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return (
					<li  
						key = {book.title} 
						onClick = {() => this.props.selectBook(book)}
						className="list-group-item">
						{book.title}
					</li>
				);
		});
	}


	render(){
		return(
		<ul className ="list-group col-sm-4">
			{this.renderList()}
		</ul>
		)
	}
}
//anything returned from this function will end up as props on the BookList container
function mapStateToProps(state){
	//whatever returns will show up as props inside of BookList ( it will be ===this.props)
	return{
		books: state.books

	}
}

function mapDispatchToProps(dispatch){
	//Whenever selectBook is called , the result should be passed to all of our reducers 
	//-----

	//	return bindActionCreators({ selectBook: selectBook - second one is the one from the top of htis page })
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promore bookList from a component to a container - it needs to know about this new dispatch method, selectBook. 
//Make it avaliable as a prop.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);