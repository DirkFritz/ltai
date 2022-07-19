import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AppService } from './app.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NONE_TYPE } from '@angular/compiler';

declare var Plotly: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ltai';

  dashboardUrl: SafeHtml = NONE_TYPE;

  @ViewChild('Graph', { static: true })
  private Graph!: ElementRef;
  public data: any = {
    x: [1, 2, 3],
    y: [2, 6, 3],
    name: 'Graph Name',
    type: 'scattergl',
    mode: 'line',
    marker: { color: 'red' },
  };

  constructor(private sanitizer: DomSanitizer, private appService: AppService) {
    this.Graph = Plotly.newPlot(this.Graph.nativeElement, [this.data]);
  }

  ngOnInit(): void {
    this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://127.0.0.1:8050/indexanalysis'
    );
    this.appService.getSelectedMainFunction().subscribe((functionName) => {
      if (functionName == 'Index Analyzer') {
        this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'http://127.0.0.1:8050/indexanalysis'
        );
      }

      if (functionName == 'Best Performer') {
        this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'http://127.0.0.1:8050/bestperformer'
        );
      }
    });
  }
}
