import { Component, OnInit } from '@angular/core';
import { PageRoute } from '@angular-template/core';

import { name as layoutName } from '@app/common/layouts/main/main.layout';

@Component({
    templateUrl: './landing.html'
})
export class LandingPage implements OnInit {
    constructor() {
    }

    public ngOnInit() {
    }
}

export const route: PageRoute = {
    path: '',
    component: LandingPage,
    layout: layoutName
};
