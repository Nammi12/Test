import { IEnvironment } from './ienvironment';

export const environment: IEnvironment = {
    production: true,
    apiBaseUrl: 'http://localhost:9999',
    i18n: {
        languages: ['en'],
        defaultLanguage: 'en'
    }
};
