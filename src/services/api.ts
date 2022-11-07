/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc3ODQxMDIsImV4cCI6MTY2Nzg3MDUwMiwic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0.Bzp3YELs6VfrzEuI1RMZCKnXOeLpL0U6PW4ZldVyz_g';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
