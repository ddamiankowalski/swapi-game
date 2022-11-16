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

  public startGame(): void {
    console.log(this.route)
    this.router.navigate(['game'], { relativeTo: this.route })
  }

  public goGithub(url: string): void {
    window.open(url, '_blank');
  }
}
