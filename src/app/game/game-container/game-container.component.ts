import { animate, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss'],
  animations: [
    trigger('routeAnimations', [
      state('game', style({
        height: '50vh'
      })),
      transition('* => game', [
        style({ overflow: 'hidden' }),
        group([
          animate('.5s ease-in-out', style({ height: '50vh' }))
        ])
      ]),
      transition('game => *', [
        style({ overflow: 'hidden' }),
        group([
          animate('.5s ease-in-out', style({ height: 0 }))
        ])
      ])
    ])
  ]
})
export class GameContainerComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegment => this.routeAnimationData = urlSegment[0].path)
  }

  public routeAnimationData: string = '';

  public getRouteAnimationData(): string {
    return this.routeAnimationData;
  }

  ngOnDestroy(): void {
    
  }

}
