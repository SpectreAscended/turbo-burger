import { json } from 'react-router-dom';

interface IRequestConfig {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown>;
}

const loaderRequest = async (requestConfig: IRequestConfig) => {
  let options;
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
