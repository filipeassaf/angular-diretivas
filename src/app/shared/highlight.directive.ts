import { Input, Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') backgroundColor: String;

    @Input() defaultColor: String = 'white';
    @Input() highlightColor: String = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

  }

}
