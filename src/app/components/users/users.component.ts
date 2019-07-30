import { Component, OnInit } from '@angular/core';
import { UserphService } from 'src/app/services/userph.service';
import { Users} from './users'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : Users[];
  show : boolean = true;
  imgLogo : string = 'assets/img/homero.png'
  constructor(private userService:UserphService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
  mostrarLista(){
    this.show=!this.show
  }

}
