import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shareButton',
  templateUrl: './shareButton.component.html',
  styleUrls: ['./shareButton.component.scss']
})
export class ShareButtonComponent {
  @Input() page: number = 1

  copyUrl() {
    const url      = window.location.href;
    const clearUrl = url.split("?")[0];

    navigator.clipboard.writeText(`${clearUrl}/?page=${this.page}`);
    alert('Clique em "Permitir" para que a URL seja copiada!\nCaso contrário, sua URL já está na área de transferência!');

  }
}
