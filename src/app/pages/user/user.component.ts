import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UserService } from './../../services/user.service';

import { DialogDetailsSkillComponent } from './../../shared/dialog-details-skill/dialog-details-skill.component';

import {
  StrengthsInterface,
  SkillsInterface,
} from './../../../interfaces/strengths.interface';

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
  public skillsInterests: SkillsInterface[] = [];

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _userService: UserService,
    public dialog: MatDialog
  ) {
    this.skillsInterests = [
      { name: 'Expert', icon: 'self_improvement', strengths: [] },
      { name: 'Master', icon: 'directions_run', strengths: [] },
      { name: 'Proficient', icon: 'directions_walk', strengths: [] },
      { name: 'Novice', icon: 'emoji_people', strengths: [] },
      {
        name: 'No experience, but interested',
        icon: 'accessibility_new',
        strengths: [],
      },
    ];
  }
  ngOnInit(): void {
    this.username = this.route.snapshot.params.id;
    if (this.username) {
      this.getUser(this.username);
    }
  }
  getUser(username: String) {
    this._userService.getUser(username.toString()).subscribe(
      (res) => {
        this.name = res.user.name;
        this.picture = res.user.picture;
        this.strengths = res.user.strengths;
        this.experience(this.strengths, this.skillsInterests);
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
    skillsInterests: SkillsInterface[]
  ) {
    const SKILLS_INTERESTS = {
      master(s) {
        skillsInterests[0].strengths.push(s);
      },
      expert(s) {
        skillsInterests[1].strengths.push(s);
      },
      proficient(s) {
        skillsInterests[2].strengths.push(s);
      },
      novice(s) {
        skillsInterests[3].strengths.push(s);
      },
      'no-experience-interested'(s) {
        skillsInterests[4].strengths.push(s);
      },
    };
    strengths.forEach((skill) => {
      SKILLS_INTERESTS[skill.proficiency](skill);
    });
  }
  openDialog(skillDetail: string): void {
    const dialogRef = this.dialog.open(DialogDetailsSkillComponent, {
      data: { username: this.username, skillDetail },
    });
    /* dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
    }); */
  }
}
