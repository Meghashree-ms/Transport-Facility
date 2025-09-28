import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showProfile = false;

  employee = {
    id: 'EMP123',
    name: 'Meghashree L',
    email: 'meghashree@example.com'
  };

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

}
