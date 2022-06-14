import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cardstyle]'
})
export class NIDDirective {
  @Input("CardStyle") CardColor:string="red";
  @Input() defaultColor:string="blue";
 
  constructor(private elemRef: ElementRef) { 
    elemRef.nativeElement.style='box-shadow: 8px 8px 8px 8px rgba(210,105,30, 0.6);'

  }
  @HostListener('mouseenter') onMouseEnter(): void
  {
    this.elemRef.nativeElement.style.border=`4px ${this.CardColor} solid`;
    this.elemRef.nativeElement.style.width=`480 `;
    this.elemRef.nativeElement.style.width=`430 `;


  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.border=`2px ${this.defaultColor} solid`;
    this.elemRef.nativeElement.style.width=`450 `;
    this.elemRef.nativeElement.style.width=`400 `;

  }


}
