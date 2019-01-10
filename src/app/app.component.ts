import { Component, OnInit } from '@angular/core';
import *  as $ from '../js/jquery.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){

    // SCROLL TOP BUTTON
    $(function(){
      //Check to see if the window is top if not then display button
  
      $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
              $('.scrollToTop').fadeIn();
          } else {
              $('.scrollToTop').fadeOut();
          }
      });
  
      //Click event to scroll to top
  
      $('.scrollToTop').click(function () {
          $('html, body').animate({ scrollTop: 0 }, 800);
          return false;
      });
    })
  }
}
