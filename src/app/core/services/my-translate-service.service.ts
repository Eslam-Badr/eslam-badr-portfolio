import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateServiceService {

  private readonly translateService = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID)

  // set init var
  savedLang: (string | null) = '';

  constructor() {
    // get lang from localstorage

    if (isPlatformBrowser(this.platformId)) {
      this.savedLang = localStorage.getItem('lang')


      // use it 
      if (this.savedLang) {
        this.translateService.use(this.savedLang)
      }
      // set default lang 
      else {
        this.translateService.setFallbackLang('en')
      }
    }


    // change direction func calling
    this.changeDirection()
  }

  // change direction and lang attr 
  changeDirection() {
    if (this.savedLang == "en") {
      document.documentElement.setAttribute("dir", "ltr")
      document.documentElement.setAttribute("lang", "en")
    } else if (this.savedLang == "ar") {
      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "ar")
    }
  }


  // change lang 
  changeLang(lang: string) {
    // set in localstorage 
    localStorage.setItem("lang", lang)

    // use translate 
    this.translateService.use(lang)

    // sync 
    this.savedLang = lang;
    
    // call change func 
    this.changeDirection()
  }
}
