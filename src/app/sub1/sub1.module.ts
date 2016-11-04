import { NgModule } from '@angular/core';

import { Sub1RoutingModule, routedComponents }   from './sub1-routing.module';

@NgModule({
    imports: [Sub1RoutingModule],
    exports: [],
    declarations: [routedComponents],
    providers: [],
})
export class Sub1Module { }
