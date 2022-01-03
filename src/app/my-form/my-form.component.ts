import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  userName: string = '';
  welcomeText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

getWelcomeText(){
  return "Thanks for registering " + this.userName;
}

  onNameEntered(){
     this.userName = '';
  }

}
