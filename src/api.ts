import axios, { AxiosResponse } from 'axios';

export async function add(): Promise<AxiosResponse> {
  const api = 'https://owasp.org/www-project-secure-headers/ci/headers_add.json';

  const response = await axios.get(api);

  return response;
}

add();
