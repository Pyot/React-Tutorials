import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { FetchMock } from '@react-mock/fetch';
import '@testing-library/jest-dom/extend-expect'
import DataFetching from './DataFetching';


const renderComponent = () =>
    render(
        <FetchMock
            mocks={[
                { matcher: 'https://jsonplaceholder.typicode.com/posts/1', method: 'GET', response: {userId: 1, id: 1, title: "title test", body: "test test "} }
            ]}
        >
            <DataFetching />
        </FetchMock>
    );

it('render', async () => {
    const { getByText } = renderComponent();
    await waitForElement(() => getByText('title test'))
});

it('render', async () => {
    const { getByText } = renderComponent();
    await waitForElement(() => getByText('title test'))
});
