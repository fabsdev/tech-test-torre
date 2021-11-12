import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { StrengthsInterface } from './../../../interfaces/strengths.interface';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public name: String = '';
  public picture: String = '';
  public username: String = '';
  public strengths: StrengthsInterface[] = [];
  public master: StrengthsInterface[] = [];
  public expert: StrengthsInterface[] = [];
  public proficient: StrengthsInterface[] = [];
  public novice: StrengthsInterface[] = [];
  public noexp: StrengthsInterface[] = [];

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.params.id;
    if (this.username) {
      this.getUser(this.username);
    }
  }
  getUser(username: String) {
    this._userService.getUser(username).subscribe(
      (res) => {
        this.name = res.person.name;
        this.picture = res.person.picture;
        this.strengths = res.strengths;
        this.experience(this.strengths);
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Username does not exist.',
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          this._router.navigateByUrl(`/`);
        }, 2000);
      }
    );
  }
  experience(strengths: StrengthsInterface[]) {
    for (let i = 0; i < strengths.length; i++) {
      const element = strengths[i];
      if (element.proficiency === 'master') {
        this.master.push(element);
      } else if (element.proficiency === 'expert') {
        this.expert.push(element);
      } else if (element.proficiency === 'proficient') {
        this.proficient.push(element);
      } else if (element.proficiency === 'novice') {
        this.novice.push(element);
      } else {
        this.noexp.push(element);
      }
    }
  }
}
