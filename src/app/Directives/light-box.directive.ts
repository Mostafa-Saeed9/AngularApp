import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
// @Input('LightBox') highLighColor:string='yellow';
// @Input() defaultColor:string='darkblue';
  constructor(private elmentRef:ElementRef) {
     this.elmentRef.nativeElement.style.border='2px solid darkblue'
  }
  ngOnChanges(): void {
    this.elmentRef.nativeElement.style.border='2px solid darkblue';
  }

  @HostListener('mouseover') mouserOver(){
    this.elmentRef.nativeElement.style.border='3px solid yellow';
  }

  @HostListener('mouseout') mouseout(){
    this.elmentRef.nativeElement.style.border="1px blue";
  }
}
