import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Reguion } from '../../interfaces/reguion.type';

@Component({
  selector: 'countries-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles: ``
})

export class ByRegionPagesComponent implements OnInit {

  public countries: Country[] = [];
  public isLouding: boolean = false;
  public reguions: Reguion[] = ["Africa","America","Asia","Europe","Oceania"];
  public selectedReguion?: Reguion;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byReguion.countries
    this.selectedReguion = this.countriesService.cacheStore.byReguion.region
  }

  searchByReguion(region: Reguion): void{
    this.selectedReguion = region
    this.isLouding = true
    this.countriesService.searchReguin(region)
    .subscribe( countries => {
       this.countries = countries
       this.isLouding = false
    });
  };
}
