import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   private employeeId: string | null = null;

  constructor() { }


  setEmployeeId(id: string) {
    this.employeeId = id;
  }

  getEmployeeId(): string | null {
    return this.employeeId;
  }
}
