import {
  StrengthsInterface,
  user,
} from './../../../interfaces/strengths.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-details-skill',
  templateUrl: './dialog-details-skill.component.html',
  styleUrls: ['./dialog-details-skill.component.css'],
})
export class DialogDetailsSkillComponent implements OnInit {
  public arrayPeopleSameSkill: user[] = [];
  public loading: boolean = true;

  constructor(
    private _userService: UserService,
    public dialogRef: MatDialogRef<DialogDetailsSkillComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      subjectId: number;
      username: string;
      skillDetail: StrengthsInterface;
      icon: string;
    } // Object that will receive the params from user component
  ) {}

  ngOnInit(): void {
    this.searchPeople();
  }
  //search people in Torre who has the skill selected
  searchPeople() {
    this._userService
      .searchPeople(
        this.data.skillDetail.name,
        this.data.skillDetail.proficiency
      )
      .subscribe((res: any) => {
        this.arrayPeopleSameSkill = res;
        this.loading = false;
      });
  }
  //close Dialog
  onClick() {
    this.dialogRef.close();
  }
}
