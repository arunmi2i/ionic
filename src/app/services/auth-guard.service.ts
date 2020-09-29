import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import {AuthService} from "../auth-service.service"

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService:AuthService) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}