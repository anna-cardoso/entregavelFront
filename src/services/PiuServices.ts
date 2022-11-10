import { Piu } from 'interfaces/Piu';
import { PiuLike } from 'interfaces/PiuLike';
import api from './api';

export default class PiuServices {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data;
    }

    static async PostLikes(): Promise<PiuLike[]> {
        const response = await api.post('/pius/like');
        return response.data;
    }
}
