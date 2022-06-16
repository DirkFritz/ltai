import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private selecteedMainFunction$: BehaviorSubject<string> = new BehaviorSubject<string>("IndexAnalyzer");
  constructor() { }

  getSelectedMainFunction() {return this.selecteedMainFunction$;}
  setSelectedMainFunction(functionName:string){this.selecteedMainFunction$.next(functionName)}
}
