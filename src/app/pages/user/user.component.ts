import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public nombre: String = '';
  public img: String = '';

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getUser('torrenegra').subscribe((res) => {
      console.log(res.person);
      this.nombre = res.person.name;
      this.img = res.person.picture;
    });
  }
}
