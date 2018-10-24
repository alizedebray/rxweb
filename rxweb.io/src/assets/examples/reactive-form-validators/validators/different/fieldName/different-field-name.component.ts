import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-different-fieldName-validator',
    templateUrl: './different-field-name.component.html'
})
export class DifferentFieldNameValidatorComponent implements OnInit {
    accountInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.accountInfoFormGroup = this.formBuilder.formGroup({
																userName:['',RxwebValidators.different({fieldName:"firstName"  ,conditionalExpression:x => x.firstName == "John" })], 
													lastName:['',RxwebValidators.different({fieldName:"firstName"  ,conditionalExpression:(x,y) =>{ return  x.firstName == "John" } })], 
								});
    }
}