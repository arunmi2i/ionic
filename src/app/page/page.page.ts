import { Component, OnInit } from '@angular/core';

// import { AuthService } from '../app/auth-service.service'
import { AuthService } from '../auth-service.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {  }

}
