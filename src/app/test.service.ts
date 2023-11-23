import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  printtoconsole(arg:any){
    console.log(arg)
  }

  constructor() { }
}
