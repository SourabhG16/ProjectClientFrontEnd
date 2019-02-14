import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
  public Unreachable: boolean;
  constructor() { }

  set_status(status)
  {
    this.Unreachable=status;
  }
  get_status()
  {
    return this.Unreachable;
  }
}
