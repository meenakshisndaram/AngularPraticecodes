import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent  implements OnInit{
  message: String='';

constructor(){
    setInterval(()=>{
      let currentdate=new Date();
      this.message=currentdate.toDateString()+" "+currentdate.toLocaleTimeString();},1000);
        
  }
  ngOnInit(): void {}
  addtwonmbers(a:number, b:number){
    return a+b;
  }

}
