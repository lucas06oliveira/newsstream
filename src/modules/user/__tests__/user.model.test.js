import { describe, it, expect, beforeEach} from 'vitest';
import * as userService from '../user.model.js';

describe('User Service - Cadastro', () => {

    let mockUserModel;

    beforeEach(() => {
        //mock do modelo sequelize
        mockUserModel = {
            findOne: vi.fn(),
            create: vi.fn()
        }
    });
    it('deve retornar erro se as senhas forem diferentes', async () => {
        //simula os dados do formulário de registro
        const data = {
            username: 'jacksparrow',
            email: 'jacksparrow@gmail.com',
            password: '12345678',
            confirmpassword: '87654321',
            fullName: 'Jack Sparrow'
        };

        //tenta chamar a função 'register' e espera que de erro
        //devido as senha diferentes
        await expect(userService.register(data, mockUserModel))
            .rejects
            .toThrow('As senhas não coincidem');
    });
});