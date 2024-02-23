import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as d3 from 'd3';
export const data = [
  { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
  { "Framework": "React", "Stars": "150793", "Released": "2013" },
  { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
  { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
  { "Framework": "Ember", "Stars": "21471", "Released": "2011" },
];

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BarComponent implements OnInit, AfterViewInit, OnChanges {

  private data: any;
  private svg: any;
  private el: HTMLElement;
  @ViewChild("chart") chart!: ElementRef<HTMLElement>;
  @Input() chartData: any;
  counterInit: number = 0;
  counterAfterInit: number = 0;

  constructor(private cdRef: ChangeDetectorRef, private zone: NgZone, private elementRef: ElementRef, private renderer: Renderer2) {
    this.data = data;
    this.el = elementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    // this.cdRef.detectChanges();
    // if (this.chart.nativeElement) {
    //   this.renderer.setProperty(this.chart.nativeElement, 'innerHTML', "")
    // }
    this.createSvg();
    this.drawBars(this.data);
  }

  ngOnInit(): void {
    alert(`Hello from ngOnInit ${this.counterInit++}`)
  }

  ngAfterViewInit(): void {
    alert(`Hello from ngAfterViewInit ${this.counterAfterInit++}`)
    console.log("Svg: ", this.chart)

    this.createSvg();
    this.drawBars(this.data);

    // this.zone.run(() => {
    //   console.log('enabled time travel');
    // });

  }

  private createSvg(): void {
    if (this.chart.nativeElement) {
      this.renderer.setProperty(this.chart.nativeElement, 'innerHTML', "")
    }
    this.svg = d3.select(this.chart.nativeElement as HTMLDivElement)
      .append("svg")
      .attr("width", this.chartData.width + (this.chartData.marginTop * 5))
      .attr("height", this.chartData.height + (this.chartData.marginRight * 5))
      .append("g")
      .attr("transform", "translate(" + this.chartData.marginTop + "," + this.chartData.marginRight + ")");
  }


  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.chartData.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.chartData.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.chartData.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.Framework))
      .attr("y", (d: any) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.chartData.height - y(d.Stars))
      .attr("fill", "#d04a35");
  }

}
