import { Country } from "./country.interface";
import { Reguion } from "./reguion.type";

export interface CacheStore {
    byCapital: TermCounties;
    byCountry: TermCounties;
    byReguion: ReguionCounties;
};

export interface TermCounties {
    term: string;
    countries: Country[];
};

export interface ReguionCounties {
    region: Reguion;
    countries: Country[];
};