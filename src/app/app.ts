import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkButton } from './components/link-button/link-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imageUrl = '/logo.png';
}
