import { Component,OnInit } from '@angular/core';

import { AppService } from './app.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ltai';

  dashboardUrl:SafeHtml=NONE_TYPE;  

  constructor(private sanitizer: DomSanitizer, private appService:AppService){}

  ngOnInit(): void {
    this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://127.0.0.1:8050/indexanalysis");
    this.appService.getSelectedMainFunction().subscribe((functionName)=>{
      if(functionName=="Index Analyzer")
      {
       this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://127.0.0.1:8050/indexanalysis");
      }
        
      if(functionName=="Best Performer")
      {
        this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://127.0.0.1:8050/bestperformer");
      }
     })
  }
  
  
}
