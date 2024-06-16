import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchArticles } from './api';

const mock = new MockAdapter(axios);

describe('fetchArticles', () => {
  afterEach(() => {
    mock.reset();
  });

  it('fetches successfully data from an API', async () => {
    const data = [{ title: 'Test Title', description: 'Test Description' }];
    mock.onGet('https://api.example.com/articles').reply(200, data);

    const result = await fetchArticles();
    expect(result).toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    mock.onGet('https://api.example.com/articles').reply(500);

    await expect(fetchArticles()).rejects.toThrow('Request failed with status code 500');
  });
});
