import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public formSubmitted = false;
  public usernameForm: FormGroup;
  public username: String;

  constructor(private _router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.usernameForm = this.fb.group({
      username: ['', Validators.required],
    });
  }
  sendUser() {
    this.formSubmitted = true;
    if (this.usernameForm.invalid) {
      return;
    }
    this.username = this.usernameForm.get('username')?.value;
    this.reloadComponent(this.username);
  }

  campoNoValido(campo: string): boolean {
    if (this.usernameForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
  reloadComponent(username: String) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigateByUrl(`/user/${username}`);
  }
}
