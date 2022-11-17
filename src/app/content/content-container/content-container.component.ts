import { animate, animateChild, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
  animations: [
    trigger('parentRouteAnimations', [
      transition('* => startGame', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
        ]),
        query(':leave', [
          style({ opacity: 1 }),
        ], { optional: true }),
        sequence([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-10rem)' })),
          ], { optional: true }),
          query('@*', animateChild()),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: 1 })),
          ])
        ])
      ]),
      transition('* => endGame', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
        ]),
        query(':leave', [
          style({ opacity: 1 }),
        ], { optional: true }),
        sequence([
          query('@*', animateChild(), { optional: true }),
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0 })),
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: 1 })),
          ]),
        ])
      ])
    ])
  ]
})
export class ContentContainerComponent implements OnInit {

  constructor(
    private contexts: ChildrenOutletContexts
  ) { }

  get appTitle(): string {
    return 'Star Wars API Game';
  }

  ngOnInit(): void {
  }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
