import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../../validators/myValidators";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent {
  allCountries = [
    {val:'ru', text:'Россия'},
    {val: 'by', text: 'Беларусь'},
    {val: 'gb', text: 'Великобритания'},
  ]

  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required, MyValidators.restrictedEmail], [MyValidators.emailExist] ),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      address: new FormGroup({
        country: new FormControl('ru', [Validators.required]),
        capital: new FormControl('Москва', [Validators.minLength(3), Validators.required]),
      }),
      skills: new FormArray([], [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.form)
  }

  setCapital(){
    const capitals: {[index: string]: string} = {
      'ru': 'Москва',
      'by': 'Минск',
      'gb': 'Лондон'
    }
    const key: string = this.form.get('address')!.get('country')!.value
    const city = capitals[key]
    this.form.patchValue({
      address: {capital: city}
    })
  }

  getFormsControls() : FormArray{
    return this.form.controls['skills'] as FormArray;
  }

  addSkill() {
    let form = new FormControl('', [Validators.required]);
    (<FormArray>this.form.get('skills')).push(form)
  }

  clearForm(){
    this.form.reset()
  }
}
