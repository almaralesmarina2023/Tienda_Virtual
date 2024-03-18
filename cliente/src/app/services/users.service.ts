import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  registro(formValue: any) {
    //alert(formValue);
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/registrar`, formValue)
    )
  }

  login(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValue)
    )
  }
}
