import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { FormData } from '../../types/formData';
import { DataPartners } from '../../types/dataPartners';
import { PartnersService } from '../../services/partners.service';

@Component({
  selector: 'app-formPartners',
  templateUrl: './formPartners.component.html',
  styleUrls: ['./formPartners.component.scss']
})
export class FormPartnersComponent implements OnInit {
  @Input() formInfo: FormData[] = [
    {
      idInput: 'name',
      label: 'Nome:',
      type: 'text',
      placeholder: 'Digite o nome do parceiro'
    },
    {
      idInput: 'decription',
      label: 'Descrição:',
      type: 'text',
      placeholder: 'Digite para que serve esta parceria'
    },
    {
      idInput: 'urlDoc',
      label: 'Url da Documentação:',
      type: 'text',
      placeholder: 'Digite a url da documentação do parceiro'
    },
    {
      idInput: 'repositoryGit',
      label: 'Repositório Git:',
      type: 'text',
      placeholder: 'Digite a url do repositório git do parceiro'
    },

  ]

  private dataPartners: DataPartners[] = []
  public formCliente!: FormGroup;

  constructor(
    private PartnersService: PartnersService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Validação de formulário reativo
    this.formCliente = this.fb.group({
      name: ['', Validators.required],
      decription: ['', Validators.required],
      urlDoc: ['', [Validators.required]],
      repositoryGit: ['', Validators.required]
    });
  }

  // Função para receber o array de partners do componente table
  receiveData(DataPartners: DataPartners) {
    this.dataPartners.push(DataPartners)
  }

  // Função para tratar os dados do formulário para a API
  onSubmit(f: FormGroupDirective) {
    const lastPartner   = this.dataPartners[this.dataPartners.length - 1];
    const nextPartnerId = Number(lastPartner.id) + 1;

    const newPartner: DataPartners = {
      id: nextPartnerId,
      name: f.value.name,
      description: f.value.description,
      repositoryGit: f.value.repositoryGit,
      urlDoc: f.value.urlDoc
    }

    console.log(this.dataPartners.length)
    // console.log(nextPartnerId)
    console.log(newPartner)

    this.updateData(newPartner);
    this.reloadPage()
  }

  // Função para atualizar a página após o envio do formulário
  private reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 200)
  }

  // Função para atualizar dados de um Partner na API
  private updateData(newPartner: DataPartners) {
    this.PartnersService.postPartners(newPartner).subscribe(
      data  => this.dataPartners.push(data),
      error => console.error(error)
    )
  }
}
