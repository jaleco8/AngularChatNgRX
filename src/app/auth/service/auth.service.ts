import { Injectable } from '@angular/core';

import { from, Observable } from "rxjs";
import { IUser } from '../../interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //fake login
  login(user: IUser): Observable<any> {
    return from([true]);
  }
}
