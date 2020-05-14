import { Directive, Input, HostBinding, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements  OnChanges {

  @Input() appState: any;
  @HostBinding('class') nomClass: string;

  constructor() {
    console.log("call")
  }
  // ngOnInit(): void{
  //   // this.nomClass = this.formatClass(this.appState);
  // }

  ngOnChanges(): void{
    this.nomClass = this.formatClass(this.appState);
  }


  private formatClass(state: string): string {
    return `state-${state.replace(/\s/g,'').toLowerCase()}`;
  }
}
