import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component'; 
import { SebastianRoutingModule } from './sebastian-routing.module';

@NgModule({
  declarations: [
    RegisterComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SebastianRoutingModule,
  ]
})
export class SebastianModule { }
