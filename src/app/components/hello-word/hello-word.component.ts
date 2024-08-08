import { HelloWordService } from './../../service/hello-word/hello-word.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.css'
})
export class HelloWordComponent implements OnInit {

 public helloMessage: String = '';

  constructor( private HelloWordService: HelloWordService) {}

  ngOnInit(): void {
    this.getHelloWord();
  }
  getHelloWord(): void {
    this.HelloWordService.getHelloWord().subscribe(
      data => {
        this.helloMessage = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
