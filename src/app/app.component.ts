import { Component } from '@angular/core';
import { CompaniesService } from './services/companies.service';
import { PartnersService } from './services/partners.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'teste-teddy';

  constructor(
    private PartnersService: PartnersService
  ) { }

  ngOnInit(): void {}
}
