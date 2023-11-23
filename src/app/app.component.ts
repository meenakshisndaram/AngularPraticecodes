import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inputText:String='Initial value';
  constructor(private svc:TestService, private http:HttpClient){
    this.svc.printtoconsole("I am meenakshi Sundaran")
    }
  ngOnInit(): void {
    let obs=this.http.get("http://127.0.0.1:5500/meenakshi_sundaram/src/app/htt.html");
    obs.subscribe((response)=>console.log(response))
    
  }
}

