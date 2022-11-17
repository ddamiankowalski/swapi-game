import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-message',
  templateUrl: './main-message.component.html',
  styleUrls: ['./main-message.component.scss']
})
export class MainMessageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  /**
   * Handler for the button to start the game
   */
  public startGame(): void {
    this.router.navigate(['game'], { relativeTo: this.route })
  }

  /**
   * Go to github button handler
   * @param url github url
   */
  public goGithub(url: string): void {
    window.open(url, '_blank');
  }
}
