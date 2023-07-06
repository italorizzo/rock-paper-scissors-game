import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { debounceTime, fromEvent, take } from 'rxjs'
import { ScoreService } from 'src/app/services/score.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  constructor(private activatedRoute : ActivatedRoute, private scoreService: ScoreService) { }
  escolha: number
  escolhaCasa: number
  resultado: string

  ngOnInit(): void {
    this.escolhaCasa = null
    this.resultado = null
    this.escolha = parseInt(this.activatedRoute.snapshot.paramMap.get("id"))
    const tempoDeInatividade = 3000

    fromEvent(document, 'click')
      .pipe(
        debounceTime(tempoDeInatividade),
        take(1)
      )
      .subscribe(() => {
          this.escolhaCasa = Math.floor(Math.random() * 3)
          this.ganhador()
      })
  }

  ganhador(){
    if (this.escolhaCasa === this.escolha) {
      this.resultado = 'empate'
    } else if (
      (this.escolha === 0 && this.escolhaCasa === 2) ||
      (this.escolha === 1 && this.escolhaCasa === 0) ||
      (this.escolha === 2 && this.escolhaCasa === 1)
    ) {
      this.resultado = 'venceu'

    } else {
      this.resultado = 'perdeu'
    }
    this.scoreService.generateScore(this.resultado)
  }
}
