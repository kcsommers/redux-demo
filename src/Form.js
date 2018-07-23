import React from 'react';
import {connect} from 'react-redux';
import {postComment} from './actions';
import {reducers} from './reducers'

const mapDispatchToProps = dispatch => {
  return {
    postComment: comment => dispatch(postComment(comment))
  };
};

const mapStateToProps = state => {
  return {comments: state.comments};
};

const ConnectedForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.postComment(e.target.comment.value)
	}

	return (<div className="comments-container">
		<ul>
			{props.comments.map((comment) => (
				<li>{comment}</li>
			))}
		</ul>

		<form onSubmit={(e) => handleSubmit(e)}>
		  <textarea name="comment"></textarea>
		  <input type="submit" value="Post Comment" />
		</form>
	</div>)
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;