import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				return res.json()
			}).then(res => {
        		console.log('res ii88',res);
				
				setPost(res)}
				)
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = (e) => {
		console.log('halo', e.key);
		e.key === 'Enter' && setIdFromButtonClick(id);
		
	}

	return (
		<div>
			<input type="text" value={id} onKeyDown={handleClick.bind(this)} onChange={e => setId(e.target.value)} />
			{/* <button type="button"  onClick={handleClick}>Fetch Post</button> */}
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}

export default DataFetching
