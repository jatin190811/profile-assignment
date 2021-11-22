import { Injectable } from '@angular/core';
import { langEnums } from '../constants/translate';

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {
  public currentLang = 'en';
  public availableLang = ['en','hn','ar'];
  constructor() { }

  __(text: string) {
    let langValue = (langEnums as any)[text][this.currentLang];
    return langValue ? langValue : text;
  }

  setLang(lang:string) {
    this.currentLang = lang;
  }

  getLang() {
    return this.currentLang;
  }
}
