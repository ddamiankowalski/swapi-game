import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private _isToggled: boolean = false;

  /**
   * Method that toggles or closes the nav
   * @param value indicator if nav should be open/closed
   */
  public toggleNav(value: boolean): void {
    this._isToggled = value;
  }

  /**
   * A method that returns boolean depending if nav is open
   * @returns true or false, depending if nav is open
   */
  public isOpened(): boolean {
    return this._isToggled;
  }
}
