import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-even-add-validator',
    templateUrl: './even-add.component.html'
})
export class EvenAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            evenNumber:['', RxwebValidators.even()], 
        });
    }
}
