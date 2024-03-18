import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import e, { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formulario: FormGroup;
  servicio_usuario= inject (UsersService);

  constructor() {
    this.formulario= new FormGroup({
      nombreUsuario: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
   }

async onSubmit(){
    const response = await this.servicio_usuario.registro(this.formulario.value);
    console.log(response);
    if(response.nombreUsuario!=null)
      alert('Usuario registrado satisfactoriamente');
    else
      alert(response.error);
    this.formulario.reset();
  }

}





