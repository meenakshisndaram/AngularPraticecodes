import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-adress-card',
  templateUrl: './adress-card.component.html',
  styleUrls: ['./adress-card.component.css']
})
export class AdressCardComponent implements OnInit{
  user:any;
  iscollapsed:boolean=true;
  @Input('names') userName: string='';
  constructor(){
   
  }
  toggleCollapsed(){
    this.iscollapsed=!this.iscollapsed;
  }
  ngOnInit(): void {
    this.user = {
      names: this.userName,
      name: "Sundaram",
      Role: "Developer",
      from: "sivakasi",
      phone: [
        '123','456'
,'7889'      ]
    };}}
