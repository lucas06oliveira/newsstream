import {describe, it, expect} from 'vitest';
import { getHealth } from '../health.service.js';

describe ('Health Service', () => {
    it('deve retornar o status OK quando o serviço está Saudável', () => {
        const result = getHealth();

        expect(result.status).toBe('OK');
        expect(result.message).toContain('Saudável');
        expect(result).toHaveProperty('timeStamp');
    })
});
