import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteSectionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public stopGame(): void {
    this.router.navigate(['']);
  }

  public goGithub(url: string): void {
    window.open(url, '_blank');
  }

}
