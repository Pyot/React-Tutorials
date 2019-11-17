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

const fetchAPI = [
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
]





function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}, ) {
    return {
        ...render(<FetchMock
            mocks={fetchAPI}>
            <Router history={history}>{ui}</Router>
        </FetchMock>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}


test('render', async () => {
    const { getByText, container } = renderWithRouter(<App/>);
	await waitForElement(() => getByText('title test'));
})

test('render', async () => {
    const { getByText, container } = renderWithRouter(<App/>, {route: '/fetch2'});
	await waitForElement(() => getByText('title test 2'));
})