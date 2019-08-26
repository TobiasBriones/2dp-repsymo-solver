import { Component, OnInit } from '@angular/core';
import { WMSolver, Model, WorkforcePerWeek } from '../solver/WMSolver';

@Component({
  selector: 'app-wm',
  templateUrl: './wm.component.html',
  styleUrls: ['./wm.component.css'],
  host: { 'class': 'page' }
})
export class WmComponent implements OnInit {

  private readonly solver: WMSolver;
  private inputDataStep: number;
  private timeWeeks: number;
  private manpowerExcessCost: number;
  private newEmployeeFixedCost: number;
  private newEmployeePerWeekCost: number;
  private inputData: WorkforcePerWeek[];
  
  constructor() {
    this.solver = new WMSolver();
    this.inputDataStep = 0;
    this.timeWeeks = 5;
    this.manpowerExcessCost = 300;
    this.newEmployeeFixedCost = 400;
    this.newEmployeePerWeekCost = 200;
    this.inputData = null;
  }
  
  initInputDataArray() {
    this.inputData = Array(this.timeWeeks);
    const sampleData: WorkforcePerWeek[] = [
      {
        week: 1,
        workforce: 5
      },
      {
        week: 2,
        workforce: 7
      },
      {
        week: 3,
        workforce: 8
      },
      {
        week: 4,
        workforce: 4
      },
      {
        week: 5,
        workforce: 6
      },
    ]
    for(let i = 0; i < this.inputData.length; i++) {
      this.inputData[i] = {
        week: i + 1,
        workforce: sampleData[i].workforce
      };
      // this.inputData[i] = {
      //   week: i + 1,
      //   workforce: 0
      // };
    }
  }
  
  ngOnInit() {
  }
  
  onNext() {
    this.inputDataStep++;
    this.initInputDataArray();
  }
  
  onSolve() {
    this.inputDataStep++;
    const model: Model = {
      manpowerExcessCost: this.manpowerExcessCost,
      newEmployeeFixedCost: this.newEmployeeFixedCost,
      newEmployeePerWeekCost: this.newEmployeePerWeekCost,
      workforceWeeks: this.inputData
    }
    
    this.solver.solve(model);
    
  }
}