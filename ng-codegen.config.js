'use strict';

module.exports = {
    rootDir: './src/app',
    imports: [
        { what: 'FormsModule', from: '@angular/forms' },
        { what: ['HttpClientModule', 'HttpClient'], from: '@angular/common/http', import: 'HttpClientModule' },
        { what: 'BrowserAnimationsModule', from: '@angular/platform-browser/animations' },
        { what: 'TranslateModule', from: '@ngx-translate/core', import: ['TranslateModule.forRoot({loader})'] },
        { what: 'loader', from: './translate', import: [] }
    ],
    allModules: {
        imports: [
            { what: 'HttpClientModule', from: '@angular/common/http' },
            { what: ['FormsModule', 'ReactiveFormsModule'], from: '@angular/forms' },
            { what: 'RouterModule', from: '@angular/router' },
            { what: 'TranslateModule', from: '@ngx-translate/core' }
        ]
    },
    excludeModules: [],
    modules: {
        common: {
            shared: true
        }
    }
};
