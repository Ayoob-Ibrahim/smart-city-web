import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent {

  private stan_vec: string;
  selected_svg: string;

  @Input() public get svgType(): string {
    return this.stan_vec;
  }

  public set svgType(data) {
    this.stan_vec = data;
  }
  color: string = '#5e51b5'
  ngAfterViewInit(): void { }

  ngOnChanges(): void {
    this.selected_svg = this.stan_vec;
  }

}
