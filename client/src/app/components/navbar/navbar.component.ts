import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  isAdmin = null;
  signedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.signedIn.subscribe((signedIn) => {
      this.authService.logOut();
      this.signedIn = signedIn;
    });
  }

  ngOnInit(): void {
    this.authService.signedIn.subscribe((signedIn) => {
      this.signedIn = signedIn;
    });
  }

  ngDoCheck() {
    if (this.isAdmin !== this.authService.isAdminLogged()) {
      this.isAdmin = this.authService.isAdminLogged();
    }
  }
}
