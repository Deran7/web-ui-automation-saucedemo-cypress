import * as generator from '@helpers/generator.js';

export const VALID_DATA_CHECKOUT = {
    firstname: generator.firstName(),
    lastname: generator.lastName(),
    postcode: generator.postCode()
}