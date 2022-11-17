import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

interface tooltipConfig {
  disabled?: boolean
  message: string
  position?: TooltipPosition
}

@Component({
  selector: 'app-globalbutton',
  templateUrl: './globalbutton.component.html',
  styleUrls: ['./globalbutton.component.scss']
})
export class GlobalButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _tooltip!: tooltipConfig;

  /**
   * An event emitter to when the user clicks the button
   */
  @Output() btnclicked: EventEmitter<boolean> = new EventEmitter();

  /**
   * If set to true the button will become disabled
   */
  @Input() disabled: boolean = false;

  /**
   * String that is to be rendered inside the button
   */
  @Input() public text: string = '';

  /**
   * Name of the type of the button
   */
  @Input() public type: 'button' | 'icon' | 'stroked' | 'raised' = 'button';

  /**
   * Color of the button
   */
  @Input() public color: 'primary' | 'accent' | 'warn' | 'basic' = 'basic';

  /**
   * Name of the icon to be rendered inside the button
   */
  @Input() public icon: string | undefined;

  /**
   * If not empty the tooltip that should be rendered
   */
  @Input() set tooltip(config: tooltipConfig) {
    this._tooltip = config;
  }

  /**
   * Getter for the tooltip message
   */
  get tooltipMessage(): string {
    return this._tooltip?.message;
  }

  /**
   * Getter that makes tooltip disabled/enabled
   */
  get isTooltipDisabled(): boolean {
    return this._tooltip?.disabled ?? false;
  }

  /**
   * Getter for a tooltip position
   */
  get tooltipPosition(): TooltipPosition {
    return this._tooltip?.position ?? 'below';
  }

  public clickBtn(): void {
    this.btnclicked.emit(true);
  }

}
