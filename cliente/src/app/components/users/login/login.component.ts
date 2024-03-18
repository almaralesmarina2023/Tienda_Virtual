import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;
  servicio_usuario = inject(UsersService);

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  async onSubmit(){
    const response = await this.servicio_usuario.login(this.formulario.value);
    console.log(response);
    if(response.token!=null)
      alert(response.succcess);
    else
     alert(response.error);
     this.formulario.reset();
   }
}
