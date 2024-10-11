import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles: ``
})
export class ByRegionPagesComponent {

  public countries: Country[] = [];
  public isLouding: boolean = false;

  constructor(private countriesService: CountriesService){}

  searchByReguion(region: string): void{
    this.isLouding = true
    this.countriesService.searchReguin(region)
    .subscribe( countries => {
       this.countries = countries
       this.isLouding = false
    });
  };
}
