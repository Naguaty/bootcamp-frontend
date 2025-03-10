import storage from './storage';
import utils from './utils';

const getServer = (url) => {
  const api = 'http://bootcamp.salesup.com:4432';
  if (url.includes('http')) { return url; }

  return api + url;
};

const doHttp = async (opts) => {
  const {
    url, payload, json = true, method = 'GET', headers = {},
    includeSesion = true,
  } = opts;
  let queryString = '';
  let options = {
    headers: {},
  };

  if (method !== 'GET') {
    options = {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload || {}),
    };
  } else if (payload && method === 'GET') {
    queryString = `?${utils.objectToQueryString(payload)}`;
  }

  Object.keys(headers).forEach((key) => {
    options.headers[key] = headers[key];
  });

  if (includeSesion) {
    const token = storage.get('token');
    options.headers.authorization = `Bearer ${token}`;
  }

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const response = await fetch(getServer(url) + queryString, options);

    let res;
    if (response.ok) {
      if (json) {
        res = await response.json();
      } else {
        res = await response.text();
      }
      resolve(res);
    } else {
      res = await response.json();
      reject(res);
    }
  });
};

const resolveUrl = (opts) => {
  const { url, data } = opts;
  return utils.replaceParams(url, data);
};

export default {
  doHttp,
  resolveUrl,
};
