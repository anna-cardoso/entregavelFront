/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgxMzE3ODEsImV4cCI6MTY2ODIxODE4MSwic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0._gjM0iT3ob2zXaTeIX-9hzLT7OiYEPNMHlVDkIyl9kg';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
