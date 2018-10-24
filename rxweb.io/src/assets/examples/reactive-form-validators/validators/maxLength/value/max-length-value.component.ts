import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLength-value-validator',
    templateUrl: './max-length-value.component.html'
})
export class MaxLengthValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['', RxwebValidators.maxLength({value:10  ,message:'Maximum 10 characters are allowed' })], 
        });
    }
}
