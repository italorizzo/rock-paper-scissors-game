import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  score: number;

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.score$.subscribe(score => {
      this.score = score;
    });
  }
}
