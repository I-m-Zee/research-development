import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'research-development';
  myName = 'zeeshan';
  myAge = 35;
  myProfession = 'Software Engineer';
  person = { name: 'Zeshan', age: 35, address: 'isb' }

  inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  constructor() { }

  ngOnInit(): void {
    // if (this.person != null &&
    //   this.person.name == 'Zeshan' &&
    //   this.person.age == 35) { console.log("Yes") }
    // else { console.log("No") }
  }
}
