import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PostList = (props) => {
	return (
		<div className="resultsContainer" id={props.id}>
			<h3 className="resultTitles">Title</h3>
			<div>{props.item.title}</div>
			<h3>Body</h3>
			<div>{props.item.body}</div>
		</div>
	);
};

export default PostList;
