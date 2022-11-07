import { Piu } from 'interfaces/Piu';
import api from './api';

export default class PiuServices {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data;
    }
}
