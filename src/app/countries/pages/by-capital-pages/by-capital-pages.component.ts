import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
})
export class ByCapitalPagesComponent {

  public isLouding: boolean = false;
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService){}

  searchByCapital(term: string): void{
    this.isLouding = true;
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
       this.countries = countries;
       this.isLouding = false;
    });
  };

}
