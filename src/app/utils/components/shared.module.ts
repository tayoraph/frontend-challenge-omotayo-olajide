import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PasswordFormComponent } from "./forms/password-form/password-form.component";
import { ProfileFormComponent } from "./forms/profile-form/profile-form.component";
import { FormValidation } from "../formsValidations/formValidation";
import { loaderService } from "../Loader/loader.service";


@NgModule({
    declarations : [  ProfileFormComponent, PasswordFormComponent ],
    imports:[IonicModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule
    ],
    providers : [FormValidation,loaderService],
    exports : [
        ProfileFormComponent, PasswordFormComponent   ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{}