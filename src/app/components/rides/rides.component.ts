import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Ride {
  empId: string;
  vehicleType: 'Bike' | 'Car';
  vehicleNo: string;
  seats: number;
  time: string; // "HH:MM"
  pickup: string;
  destination: string;
   bookedBy?: string[]; 
}
@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  rideForm: FormGroup;
  rides: Ride[] = [];
  searchTerm: string = '';
  filterTime: string = '';
   bookedBy:any; 
   currentEmployeeId:any = 123;
  constructor(private fb: FormBuilder) {
    this.rideForm = this.fb.group({
      empId: ['', Validators.required],
      vehicleType: ['Bike', Validators.required],
      vehicleNo: ['', Validators.required,Validators.pattern('^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{3,4}$')],
      seats: [1, [Validators.required, Validators.min(1)]],
      time: ['', Validators.required],
      pickup: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  ngOnInit(): void {
     this.currentEmployeeId = localStorage.getItem('loggedInEmployee') || '';
    
  }
addRide() {

  this.currentEmployeeId = this.rideForm.get('empId')?.value;
  if (this.rideForm.invalid) {
    this.rideForm.markAllAsTouched();
    return;
  }

  const newRide: Ride = this.rideForm.value;

  
  const alreadyAdded = this.rides.some(
    ride => ride.empId === this.currentEmployeeId
  );

  if (alreadyAdded) {
    alert("You have already added a ride. You cannot add another one.");
    return;
  }

  newRide.empId = this.currentEmployeeId;
  newRide.bookedBy = [];

  this.rides.push(newRide);

  this.rideForm.reset({
    vehicleType: 'Bike',
    seats: 1
  });

  alert("Ride added successfully!");
}


 

  bookRide(index: number) {
    const ride = this.rides[index];

    if (ride.empId === this.currentEmployeeId) {
      alert("You cannot book your own ride!");
      return;
    }

    if (!ride.bookedBy) {
      ride.bookedBy = [];
    }

    if (ride.bookedBy.includes(this.currentEmployeeId)) {
      alert("You have already booked this ride!");
      return;
    }

    if (ride.seats > 0) {
      ride.seats -= 1;
      ride.bookedBy.push(this.currentEmployeeId);
      alert("Ride booked successfully!");
    } else {
      alert("No seats available!");
    }
  }



  get filteredRides(): Ride[] {
    return this.rides.filter(r => {
      const matchVehicle = r.vehicleType.toLowerCase().includes(this.searchTerm.toLowerCase());

      let matchTime = true;
      if (this.filterTime) {
        matchTime = this.isWithinOneHour(r.time, this.filterTime);
      }

      return matchVehicle && matchTime;
    });
  }

  private isWithinOneHour(rideTime: string, selectedTime: string): boolean {
    const [rh, rm] = rideTime.split(':').map(Number);
    const [sh, sm] = selectedTime.split(':').map(Number);

    const rideMinutes = rh * 60 + rm;
    const selectedMinutes = sh * 60 + sm;

    return Math.abs(rideMinutes - selectedMinutes) <= 60;
  }

 
  hasErrorControl(controlName: string, error: string): boolean {
    const control = this.rideForm.get(controlName);
   return  ((control?.touched || control?.dirty) && control?.hasError(error)) ?? false;
  }

}
