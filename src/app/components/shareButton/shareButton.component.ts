import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareButton',
  templateUrl: './shareButton.component.html',
  styleUrls: ['./shareButton.component.scss']
})
export class ShareButtonComponent implements OnInit {
  @Input() page: number = 1

  constructor() { }

  ngOnInit() {

  }

  copyUrl() {
    var url = `${window.location.href}/page=${this.page}`;
    navigator.clipboard.writeText(url);
    console.log(this.page)
    alert('Clique em "Permitir" para que a URL seja copiada!\nCaso contrário, sua URL já está na área de transferência!');

  }

}
