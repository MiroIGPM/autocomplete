import axios, { AxiosResponse } from 'axios';

import { FetchDataResponse, IFetchData } from './models/fetch-data';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = async (): Promise<IFetchData[]> => {
  try {
    const response: AxiosResponse<FetchDataResponse[]> = await axios.get(API_URL);
    const fetchedData = response.data.map((item) => {
      return {
        id: item.id,
        text: item.title,
      };
    });
    return fetchedData;
  } catch (error) {
    throw new Error('Failed to retrive data');
  }
};
