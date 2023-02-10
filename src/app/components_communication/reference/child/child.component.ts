import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-reference',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message = 'message from child';

  constructor() {  }

  ngOnInit(): void {}
}
