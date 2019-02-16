import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
  public Unreachable: boolean;
  public LoggedUser:String;
  constructor() { }
}
