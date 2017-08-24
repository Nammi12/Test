export interface IEnvironment {
    production: boolean;
    apiBaseUrl: string;
    i18n: {
        languages: string[];
        defaultLanguage: string;
        currencySymbol?: string;
        dateFormat?: string;
    };
}
