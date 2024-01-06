import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareButton',
  templateUrl: './shareButton.component.html',
  styleUrls: ['./shareButton.component.scss']
})
export class ShareButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copyUrl() {
    var url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Clique em "Permitir" para que a URL seja copiada!\nCaso contrário, sua URL já está na área de transferência!');
  }

}
