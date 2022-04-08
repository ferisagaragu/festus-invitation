import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'ng-urxnium';
import { AuthService } from '../../../core/http/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide: boolean;
  load: boolean;
  error: string;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {
    this.hide = true;
    this.load = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  signIn(): void {
    if (this.form.invalid) {
      return;
    }

    this.load = true;
    this.form.disable();

    this.authService.signIn(
      this.form.value
    ).subscribe(resp => {
      this.sessionService.signIn(resp.session, resp);
      this.router.navigate(['/event']);
    }, error => {
      this.load = false;
      this.form.enable();

      if (error.fieldNameError === 'userName')
        this.form.get(error.fieldNameError)
          .setErrors({ server: error.message });

      if (error.fieldNameError === 'password')
        this.form.get(error.fieldNameError)
          .setErrors({ server: error.message });

      if (!error.fieldNameError) this.error = error;
    });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
