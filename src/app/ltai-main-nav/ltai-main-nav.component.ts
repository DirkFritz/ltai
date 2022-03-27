import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ltai-main-nav',
  templateUrl: './ltai-main-nav.component.html',
  styleUrls: ['./ltai-main-nav.component.css']
})
export class LtaiMainNavComponent implements OnInit {

  constructor() { }

  public navbarCollapsed = true;

  ngOnInit(): void {
  }

}
