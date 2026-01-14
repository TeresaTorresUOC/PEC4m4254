import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
    imports: [ReactiveFormsModule, UserRoutingModule],
})
export class UserModule {}
