import * as helpers from './helpers';
import { authApiEndpoints } from './auth';

export const Api = {
    ...helpers,
    auth: authApiEndpoints,
};
