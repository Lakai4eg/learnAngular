import {FormControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidators {

  static restrictedEmail(control: FormControl): {[key: string]: boolean} | null   {
    if(control.value?.match(/@mail.ru/)){
      return {restrictedemail: true}
    }
    return null
  }

  static emailExist(control: FormControl): Promise<{[key: string] : boolean} | null> | Observable<{[key: string] : boolean} | null>{
      return new Promise(resolve => {
        setTimeout(() => {
          if (control.value === 'e@e.ru'){
            resolve({nonUniqueEmail: true})
          }
          else {
            resolve(null)
          }
        }, 1500)
      })
    }

}
