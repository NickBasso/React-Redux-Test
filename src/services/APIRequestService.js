// @flow

import axios from 'axios';
import { initialItemsLink, moreItemsLink } from '../configs/references';

export function fetchData(url): Promise {
  return axios(url);
}

let key = 0;

export async function fetchInitialItems(): Promise {
  const url = initialItemsLink;
  const response = await axios(url);

  const data = response.data.map((el) => {
    el.fullName = `${el.name.first} ${el.name.last}`;
    el.key = key++;

    return el;
  });

  return data;
}

export async function fetchMoreItems(): Promise {
  const url = moreItemsLink;
  const response = await axios(url);

  const data = response.data.map((el) => {
    el.fullName = `${el.name.first} ${el.name.last}`;
    el.key = el.listNumber = key++;
    return el;
  });

  return data;
}
