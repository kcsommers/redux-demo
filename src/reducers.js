import {postComment} from './actions';

const initialState = {
	comments: ['SOMETHING HERE','SOMETHING ELSE']
}

export const reducers = (state = initialState, action) => {
	switch(action.type) {
		case 'POST_COMMENT': 
			let comments = Array.from(state.comments);
			comments.push(action.payload);
			return Object.assign({}, state, {comments});
		default:
			return state;
	}
}