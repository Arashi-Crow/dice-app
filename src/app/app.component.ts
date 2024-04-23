import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dice-app';
  leftDice = '../assets/dice1.png';
  rightDice = '../assets/dice2.png';

  throwDice(): void {
    const number1 = this.randomIntFromInterval(1, 6);
    const number2 = this.randomIntFromInterval(1, 6);
    this.leftDice = `../assets/dice${number1}.png`;
    this.rightDice = `../assets/dice${number2}.png`;
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
