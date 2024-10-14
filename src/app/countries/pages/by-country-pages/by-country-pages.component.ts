import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-pages',
  templateUrl: './by-country-pages.component.html',
  styles: ``
})
export class ByCountryPagesComponent implements OnInit{

  public countries: Country[] = [];
  public isLouding: Boolean = false;
  public inicialValue: string = '';

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.inicialValue = this.countriesService.cacheStore.byCountry.term
  };

  searchByCountry(term: string){
    this.isLouding = true;
    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries
        this.isLouding = false
     });
  }
}
