import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {
  public organizationList: any = [];
  constructor(private organizationService: OrganizationService,private router:Router) { }
  ngOnInit(): void {
    this.getOrganizationListData();
  }

  navigateToAddOrganization() {
    this.router.navigate(['add-organization']);
  }

  navigateToLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
  
getOrganizationListData(): void {
    this.organizationService.getUrganizationList().subscribe({
      next: response => {
        this.organizationList = response.data;
      },
      error: (error) => {
        console.log(error);
        alert(error?.error.error);
      }
    });

  }
}
