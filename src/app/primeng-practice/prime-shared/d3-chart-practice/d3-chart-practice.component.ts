import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface iChartType {
  id: number,
  type: string
}

export const chartTypes = [
  { id: 0, type: 'Default' },
  { id: 1, type: 'Bar' },
  { id: 2, type: 'Pie' },
  { id: 3, type: 'Scatter' },
  { id: 4, type: 'Column' },
  { id: 5, type: 'Test1' },
  { id: 6, type: 'Test2' },
  { id: 7, type: 'Test3' },
  { id: 8, type: 'Test4' },
  { id: 9, type: 'Test5' },
  { id: 10, type: 'Test6' },
  { id: 11, type: 'Test7' },
]


@Component({
  selector: 'app-d3-chart-practice',
  templateUrl: './d3-chart-practice.component.html',
  styleUrl: './d3-chart-practice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class D3ChartPracticeComponent implements OnInit, AfterViewInit {

  chartForm: FormGroup;
  anchor: any;
  chartType: number = 0;
  chartData: any;
  counter: number = 0;
  chartTypes: iChartType[] = chartTypes;
  // Bar Chart

  private svg: any;

  constructor(private _fb: FormBuilder) {
    this.chartForm = this.formControls;
  }

  ngOnInit(): void {
    this.chartData = this.chartForm?.value;
  }

  ngAfterViewInit(): void {
    // this.anchor = d3.select("chart");
    this.chartType = this.chartForm.get('cType')?.value
  }

  get formControls() {
    return this._fb.group({
      height: 400,//['', Validators.required],
      width: 600,//['', Validators.required],
      xAxis: [''],
      yAxis: [''],
      label: [''],
      cType: ['', Validators.required],
      chartname: [''],
      marginTop: 20,//[''],
      marginRight: 20,//[''],
      marginBottom: [''],
      marginLeft: ['']
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.counter++;
    this.chartType = this.chartForm.get('cType')?.value
    this.chartData = this.chartForm?.value;
    console.warn("Form Data: ", this.chartForm.value);
    console.log("Anchor Tag: ", this.anchor)
  }



}
