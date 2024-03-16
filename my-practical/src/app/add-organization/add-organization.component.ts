import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit{
  organizationForm: any = [];
  isSubmited: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,private organizationService: OrganizationService
   , private toastr: ToastrService){}
  ngOnInit(): void {
    this.onFormInIt();
  }

  onFormInIt() {
    this.organizationForm = this.fb.group({
      organizationName: ['', [Validators.required,Validators.maxLength(100)]],
      organizationShortName: ['', [Validators.required,Validators.maxLength(50)]],
      organizationUrl:['',Validators.required,],
      logo:['',Validators.required],
    })
  }
  
  onCancelClick() {
    this.router.navigate(['organization-list']);
  }

  get f() {
    return this.organizationForm.controls;
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.organizationForm.invalid) {
      return
    }
    else {
      this.organizationService.addUrganization(this.organizationForm.value).subscribe({
        next: response => {
          // this.toastr.success('Organization added successfully', 'Success');
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
