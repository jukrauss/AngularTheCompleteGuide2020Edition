import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  game;
  incrementalNumber = 0;
  @Output('gameRunning') gameRuns = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    console.log('started');
    this.game = setInterval(() => {
      this.gameRuns.emit(this.incrementalNumber++); 
    }, 1000);
  }

  onStopGame() {
    console.log('stopped');
    clearInterval(this.game);
  }
}
