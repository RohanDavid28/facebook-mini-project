import { Component, Input, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{NgForm} from'@angular/forms'
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  @Input() message: string='';
    constructor(private _Router:Router) { 



    }
  public username='';
  public password='';
  public isErrorMessage=false;
  ngOnInit(): void {
  }

  loginTrigger()
  {
    if(this.username=='rohan' &&this.password=='password')
      this._Router.navigateByUrl('/homepage');
    else
    {
      this.isErrorMessage=true;
    }
  }

}
