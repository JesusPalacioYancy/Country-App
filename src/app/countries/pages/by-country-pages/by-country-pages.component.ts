import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles: ``
})
export class ByCountryPagesComponent {

  public countries: Country[] = [];
  public isLouding: Boolean = false

  constructor(private countriesService: CountriesService){}
  
  searchByCountry(term: string){
    this.isLouding = true;
    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries
        this.isLouding = false
     });
  }
}
