import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {
  canExit() : boolean {
 
    if (confirm("Do you wish to Please confirm")) {
        return true
      } else {
        return false
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
