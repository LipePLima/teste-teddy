import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormData } from '../../types/formData';

@Component({
  selector: 'app-formCompanies',
  templateUrl: './formCompanies.component.html',
  styleUrls: ['./formCompanies.component.scss']
})
export class FormCompaniesComponent implements OnInit {
  @Input() formInfo: FormData[] = [
    {
      idInput: 'name',
      label: 'Nome:',
      type: 'text',
      placeholder: 'Digite o nome da empresa'
    },
    {
      idInput: 'collaborator',
      label: 'Número de Colaboradores:',
      type: 'text',
      placeholder: 'Digite o número de colaboradores'
    },
    {
      idInput: 'date',
      label: 'Data de Abertura:',
      type: 'date',
      placeholder: ''
    },
    {
      idInput: 'status',
      label: 'Status:',
      type: 'tel',
      placeholder: 'Digite o status da empresa'
    },
  ]

  public formCliente!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formCliente = this.fb.group({
      name: ['', Validators.required],
      collaborator: ['', Validators.required],
      date: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required]
    });
  }

  onSubmit() {

  }
}
