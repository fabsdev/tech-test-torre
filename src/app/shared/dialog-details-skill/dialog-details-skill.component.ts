import { StrengthsInterface } from './../../../interfaces/strengths.interface';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-details-skill',
  templateUrl: './dialog-details-skill.component.html',
  styleUrls: ['./dialog-details-skill.component.css'],
})
export class DialogDetailsSkillComponent implements OnInit {
  constructor(
    private _userService: UserService,
    public dialogRef: MatDialogRef<DialogDetailsSkillComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { username: string; skillDetail: StrengthsInterface }
  ) {}

  ngOnInit(): void {}

  searchOpportunitties() {
    this._userService
      .searchOpportunities(this.data.username)
      .subscribe((res) => {
        console.log(res);
      });
  }
  searchPeople() {
    this._userService
      .searchPeople(this.data.username, this.data.skillDetail)
      .subscribe((res) => {
        console.log(res);
      });
  }
  onClick() {
    this.dialogRef.close();
  }
}
