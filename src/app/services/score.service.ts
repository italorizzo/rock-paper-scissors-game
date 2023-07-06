import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreSubject: BehaviorSubject<number>;
  score$: Observable<number>;

  constructor() {
    const storedScore = localStorage.getItem('score');
    this.scoreSubject = new BehaviorSubject<number>(storedScore ? Number(storedScore) : 0);
    this.score$ = this.scoreSubject.asObservable();
  }

  generateScore(result: string): void {
    let score = this.scoreSubject.value;

    if (result === 'venceu') {
      score += 10;
    } else if (result === 'perdeu') {
      score -= 10;
    }

    this.scoreSubject.next(score);
    localStorage.setItem('score', String(score));
  }
}
