import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[ru-row]'
})
export class RuRowDirective {

    @HostBinding('class')
    get hostClasses(): any {
        return {
            'row': true
        };
    }

}