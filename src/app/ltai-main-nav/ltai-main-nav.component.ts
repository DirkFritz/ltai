import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ltai-main-nav',
  templateUrl: './ltai-main-nav.component.html',
  styleUrls: ['./ltai-main-nav.component.css'],
})
export class LtaiMainNavComponent implements OnInit {
  constructor(private appService: AppService) {}

  public navbarCollapsed = true;
  public selectedFunction = 'Index Analyzer';

  ngOnInit(): void {}

  changeFunction(selectedFunction: string) {
    this.appService.setSelectedMainFunction(selectedFunction);
    this.selectedFunction = selectedFunction;
  }
}
