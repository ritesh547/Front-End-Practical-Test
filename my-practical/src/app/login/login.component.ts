import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = [];
  isSubmited: boolean = false;
  public emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  public passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,20}$/;

  constructor(private router: Router, private fb: FormBuilder, private authService: OrganizationService) {
    this.onFormInIt();
  }

  onFormInIt() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      organizationUrl:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  goBack() {
    this.router.navigate(['']);
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.loginForm.invalid) {
      return
    }
    else {
      this.router.navigate(['']);
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: response => {
          alert("You have logged in successfully!");
          localStorage.setItem('token', JSON.stringify(response));
          this.router.navigateByUrl('organization-list');
        },
        error: (error) => {
          console.log(error);
          alert(error?.error.error);
        }
      });

    }
  }
}
