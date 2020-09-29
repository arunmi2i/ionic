import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}