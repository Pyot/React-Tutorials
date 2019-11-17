import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { FetchMock } from '@react-mock/fetch';
import '@testing-library/jest-dom/extend-expect';
import DataFetching from './DataFetching';
import { createMemoryHistory } from 'history'
import Fetch2 from './Fetch2'
import App from '../App';
import { Router as Router } from 'react-router-dom';

const history = createMemoryHistory()


const renderComponent = () =>
	render(
		<FetchMock
			mocks={[
				{
					matcher: 'https://jsonplaceholder.typicode.com/posts/1',
					method: 'GET',
					response: {
						userId: 1,
						id: 1,
						title: 'title test',
						body: 'test test '
					}
				},
				{
					matcher: 'https://jsonplaceholder.typicode.com/posts/2',
					method: 'GET',
					response: {
						userId: 2,
						id: 2,
						title: 'title test 2',
						body: 'test test 2'
					}
				}
			]}>
			<Router history={history}>
				<App />
			</Router>
		</FetchMock>
	);


// it('render', async () => {
// 	const { getByText, container } = renderComponent();
// 	await waitForElement(() => getByText('title test'));
// });

// it('render', async () => {
// 	const { getByText } = renderComponent();
// 	await waitForElement(() => getByText('title test'));
// });

it('render second component', async()=>{
	const { getByText } = renderComponent();
	history.push('/fetch2')
	await waitForElement(() => getByText('title test 2'));
	// history.push('/')
	// await waitForElement(() => getByText('title test'));


}
)

