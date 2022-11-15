import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private _isToggled: boolean = false;

  public toggleNav(value: boolean): void {
    this._isToggled = value;
  }

  public isOpened(): boolean {
    return this._isToggled;
  }
}
