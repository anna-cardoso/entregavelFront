/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgxMTA1NzksImV4cCI6MTY2ODE5Njk3OSwic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0.Pheg0mrQ7YsZrWXlMGN7ZX4yZFByTgB_avu54qXR7_0';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
