import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-d3-chart-practice',
  templateUrl: './d3-chart-practice.component.html',
  styleUrl: './d3-chart-practice.component.scss'
})
export class D3ChartPracticeComponent implements OnInit {

  chartForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.chartForm = this.formControls;
  }

  ngOnInit(): void {
  }

  get formControls() {
    return this._fb.group({
      height: ['', Validators.required],
      width: ['', Validators.required],
      xAxis: [''],
      yAxis: [''],
      label: [''],
      chartType: ['', Validators.required],
      chartname: [''],
      marginTop: [''],
      marginRight: [''],
      marginBottom: [''],
      marginLeft: ['']
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn("Form Data: ", this.chartForm.value);
  }

}
