import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public formSubmitted = false;
  public usernameForm: FormGroup;
  constructor(private fb: FormBuilder) {}

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
    console.log(this.usernameForm.get('username')?.value);
  }

  campoNoValido(campo: string): boolean {
    if (this.usernameForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
