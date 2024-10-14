import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
})
export class ByCapitalPagesComponent implements OnInit{

  public isLouding: boolean = false;
  public countries: Country[] = [];
  public inicialValue: string = ''

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.inicialValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string): void{
    this.isLouding = true;
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
       this.countries = countries;
       this.isLouding = false;
    });
  };

}
