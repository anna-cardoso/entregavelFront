import { User } from './User';
import { Piu } from './Piu';

export interface PiuLike {
    id: string;
    user: User;
    piu: Piu;
}
