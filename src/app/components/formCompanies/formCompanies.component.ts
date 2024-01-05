import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formCompanies',
  templateUrl: './formCompanies.component.html',
  styleUrls: ['./formCompanies.component.scss']
})
export class FormCompaniesComponent implements OnInit {
  public formGroup = [
    {
      id: 'name',
      label: 'Nome:',
      type: 'text',
      placeholder: 'Digite o nome da empresa'
    },
    {
      id: 'cnpj',
      label: 'CNPJ:',
      type: 'text',
      placeholder: 'Digite o CNPJ da empresa'
    },
    {
      id: 'email',
      label: 'E-mail:',
      type: 'email',
      placeholder: 'Digite o e-mail da empresa'
    },
    {
      id: 'tel',
      label: 'Telefone:',
      type: 'tel',
      placeholder: 'Digite o telefone da empresa'
    },
  ]

  public formCliente!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formCliente = this.fb.group({
      name: ['', Validators.required],
      cnpj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required]
    });
  }

  onSubmit() {

  }

}
