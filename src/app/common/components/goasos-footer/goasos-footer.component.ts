import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './goasos-footer.component.html',
  styleUrl: './goasos-footer.component.scss'
})
export class GoasosFooterComponent {

  public onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement;
    if (input?.value) {
      window.location.href = `mailto:hemanta.bal@goasos.com?subject=Newsletter%20Subscription&body=Please%20subscribe%20${encodeURIComponent(input.value)}%20to%20the%20GOASOS%20newsletter.`;
    }
  }
}
