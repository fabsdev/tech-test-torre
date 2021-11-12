import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import {
  StrengthsInterface,
  TypeofStrengthsInterface,
} from './../../../interfaces/strengths.interface';
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
  public newStrengths = <TypeofStrengthsInterface>{
    master: [],
    expert: [],
    proficient: [],
    novice: [],
    noexp: [],
  };
  /*   public master: StrengthsInterface[] = [];
  public expert: StrengthsInterface[] = [];
  public proficient: StrengthsInterface[] = [];
  public novice: StrengthsInterface[] = [];
  public noexp: StrengthsInterface[] = []; */

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
        /* console.log(this.strengths); */
        this.experience(this.strengths, this.newStrengths);
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
  experience(
    strengths: StrengthsInterface[],
    newStrengths: TypeofStrengthsInterface
  ) {
    strengths.filter((s) => {
      if (s.proficiency === 'master') {
        newStrengths.master.push(s);
      } else if (s.proficiency === 'expert') {
        newStrengths.expert.push(s);
      } else if (s.proficiency === 'proficient') {
        newStrengths.proficient.push(s);
      } else if (s.proficiency === 'novice') {
        newStrengths.novice.push(s);
      } else {
        newStrengths.noexp.push(s);
      }
    });
  }
}
