import { Component } from "@angular/core";
import { AuthService } from "../../../authentications/services/auth.service";
import { Router, RouterModule } from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterModule],
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.css'
})


export class HeaderComponent{

  constructor(private autheService:AuthService, private router:Router){}

  public logout(){
    confirm("are you sure you want to logout?")
    this.autheService.logout();
    this.router.navigate([''])
  }

}
