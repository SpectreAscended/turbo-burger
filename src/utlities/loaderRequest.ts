import { json } from 'react-router-dom';

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
}

interface RequestConfig extends RequestOptions {
  url: string;
}

const loaderRequest = async (requestConfig: RequestConfig) => {
  let options: RequestOptions;
  if (!requestConfig.method) {
    options = {};
  } else {
    options = {
      method: requestConfig.method,
      headers: requestConfig.headers || { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestConfig.body),
    };
  }
  try {
    const res = await fetch(requestConfig.url, options);

    if (!res.ok) throw new Error('Problem fetching data');

    const data = await res.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('There was an unknown error');
    }
    throw json({ message: 'Problem fetching data' }, { status: 500 });
  }
};

export default loaderRequest;
