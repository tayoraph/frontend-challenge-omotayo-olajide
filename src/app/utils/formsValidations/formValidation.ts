import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';


// ** password  matching function i got custom 
export function matchingInputsValidator(firstKey: string, secondKey: string) {
    return function (group: FormGroup): ValidationErrors | undefined {
      if (group.controls[firstKey].value !== group.controls[secondKey].value) {
        return {
          'missmatch': true
        };
      }
    };
  }


@Injectable()
export class FormValidation {
    public login!: FormGroup; // exclamation is assuring typescript that property is not null
    public UserReg!: FormGroup;
    public confirmNumber!: FormGroup;
    public forgotPassword!: FormGroup;
    public changePassword! : FormGroup;
    public addAddress! : FormGroup;

    constructor(public formBuilder: FormBuilder) {}



    /**
     * @todo Add new address form
     * @returns 
     */
    addNewAddress() {
        this.addAddress =
            this.formBuilder.group({
                  apartmentSuiteNumber : new FormControl('', Validators.compose([Validators.required, Validators.minLength(1) ],)),
                  streetAddress: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
                  city: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(3) ])),
                  state: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
                  country : new FormControl('', Validators.compose([Validators.required, Validators.minLength(3) ],)),
                  
                });
        return this.addAddress;
    }






/*** User Login Validation */

    LoginMethod() {
        this.login =
            this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])),
                  password: new FormControl('', Validators.compose([
                    Validators.minLength(5),
                    Validators.required
                  ])),
            });
        return this.login;
    }

    /*** Forgot Password Validation */

    ForgotPasswordMethod() {
        this.forgotPassword =
            this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ]))
            });
        return this.forgotPassword;
    }

    /** change password */
    ChangePasswordMethod() {
        this.changePassword =
            this.formBuilder.group({
                password: ['', [Validators.minLength(5),
                Validators.required]],
                passwordConfirm: ['', [Validators.minLength(5),
                Validators.required]],
            }, { validator: this.passwordConfirming })
        return this.changePassword;
    }

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        let res : any;
        if (c.get('password')?.value !== c.get('passwordConfirm')?.value) {
            res  = { invalid: true };
        }
        return res;
    }

    userRegistrationMethod() {
        this.UserReg =
            this.formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])),
                  password: new FormControl('', Validators.compose([
                    Validators.minLength(5),
                    Validators.required
                  ])),
                    firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)  ])),
                    lastName: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(3) ])),
                    mobile : new FormControl('', Validators.compose([Validators.required, Validators.minLength(11) ],)),

                });
        return this.UserReg;
    }

}
