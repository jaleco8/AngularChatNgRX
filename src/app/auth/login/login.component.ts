import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/iuser';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user).subscribe(
      (res) => {
        console.log(res);
        
      }
    );
  }
}
