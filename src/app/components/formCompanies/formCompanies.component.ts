import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { FormData } from '../../types/formData';
import { DataCompanies } from '../../types/dataCompanies';
import { CompaniesService } from '../../services/companies.service';

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
      type: 'number',
      placeholder: 'Digite o número de colaboradores'
    },
    {
      idInput: 'date',
      label: 'Data de Abertura:',
      type: 'date',
      placeholder: ''
    }
  ]

  private dataCompanies: DataCompanies[] = []
  public formCliente!: FormGroup;

  constructor(
    private CompaniesService: CompaniesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formCliente = this.fb.group({
      name:         ['', Validators.required],
      collaborator: ['', Validators.required],
      date:         ['', [Validators.required]],
      status:       ['', Validators.required]
    });
  }

  // Função para receber o array de companies do componente table
  receiveData(dataCompanies: DataCompanies) {
    this.dataCompanies.push(dataCompanies)
  }

  // Função para tratar os dados do formulário para a API
  onSubmit(f: FormGroupDirective) {
    const lastCompanie   = this.dataCompanies[this.dataCompanies.length - 1];
    const nextCompanieId = Number(lastCompanie.id) + 1;

    const newCompanie: DataCompanies = {
      id: nextCompanieId,
      collaboratorsCount: Number(f.value.collaborator),
      companyName: f.value.name,
      createdAt: f.value.date,
      isActive: this.convertToBoolean(f.value.status)
    }

    this.updateData(newCompanie);
    this.reloadPage()
  }

  // Função para atualizar a página após o envio do formulário
  private reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 200)
  }

  // Função para atualizar dados de uma companie na API
  private updateData(newCompanie: DataCompanies) {
    this.CompaniesService.postCompanies(newCompanie).subscribe(
      data  => this.dataCompanies.push(data),
      error => console.error(error)
    )
  }

  // Função para converter o valor string da opction de select em boolean
  convertToBoolean(input: string): boolean {
    return JSON.parse(input.toLowerCase());
  }
}
