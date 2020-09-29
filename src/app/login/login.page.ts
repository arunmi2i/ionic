import { Component, OnInit } from '@angular/core';

import { TabsPage } from '../tabs/tabs.page';
import { NavController } from '@ionic/angular';
import { Router } from  "@angular/router";
import { AuthService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl:NavController, public authService:AuthService, private  router:  Router) { }

  ngOnInit() {
  }

  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/page');
    });
    form.reset();
  }
}
