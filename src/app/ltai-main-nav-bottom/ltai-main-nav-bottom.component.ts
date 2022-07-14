import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-ltai-main-nav-bottom',
  templateUrl: './ltai-main-nav-bottom.component.html',
  styleUrls: ['./ltai-main-nav-bottom.component.css'],
})
export class LtaiMainNavBottomComponent implements OnInit {
  constructor(private appService: AppService) {}

  public navbarCollapsed = true;

  ngOnInit(): void {}
}
