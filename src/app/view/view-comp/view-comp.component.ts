import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.css']
})
export class ViewCompComponent {
  useName:string='';
  response:any;

  constructor(private svc:TestService, private http :HttpClient){
    this.svc.printtoconsole("I am meenakshi Sundaran from view module")
    }
    search(){
      this.http.get("http://127.0.0.1:5500/meenakshi_sundaram/src/app/htt.html"+this.useName)
      .subscribe((response)=>console.log(this.response=response))
    }
}