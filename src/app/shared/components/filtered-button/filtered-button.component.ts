import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-filtered-button',
  templateUrl: './filtered-button.component.html',
  styleUrl: './filtered-button.component.css'
})
export class FilteredButtonComponent {

  // For responsive
  isLargeScreen = false //width: 1060px
  isMediumScreen = false // width: 740px
  isSmallScreen = false; //width: 460px
  isExtraSmallScreen = false //width: < 460px

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.detectScreenSize(event.target.innerWidth); //Function
  }

  ngOnInit(){
    this.detectScreenSize(window.innerWidth);
  }

  //Function
  private detectScreenSize(width: number){
    this.isLargeScreen = width > 1060;
    this.isMediumScreen = width > 750 && width <= 1060;
    this.isSmallScreen = width > 550 && width <= 750;
    this.isExtraSmallScreen = width <= 550;
  }


}
