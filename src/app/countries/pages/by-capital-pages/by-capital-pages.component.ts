import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
})
export class ByCapitalPagesComponent {

  searchByCapita(term: string): void{
    console.log('Desde ByCapitalPage')
    console.log({ term })
  }

}
