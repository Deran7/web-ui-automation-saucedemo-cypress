import * as generator from '@helpers/generator.js';

export const VALID_LOGIN = {
    username: 'standard_user',
    password: 'secret_sauce'
}

export const INVALID_LOGIN_WITH_USERNAME_AND_PASSWORD_NOT_REGISTED = {
    username: generator.username(),
    password: generator.password()
}