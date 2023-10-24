import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    // Simula una espera de 3 segundos y luego redirige al home
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000); // Redirección después de 3 segundos
  }
}
