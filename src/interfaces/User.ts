/* eslint-disable camelcase */

import { PiuLike } from './PiuLike';
import { Piu } from './Piu';

export interface User {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    photo: string;
    pius: Piu[];
    likes: PiuLike[];
    following: User[];
    followers: User[];
    favorites: Piu[];
}
