import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../../../core/services/flowbite/flowbite.service';
import { Component, ElementRef, HostListener, inject, QueryList, ViewChildren } from '@angular/core';
import { translate, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MyTranslateServiceService } from '../../../../core/services/my-translate-service.service';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  private readonly translateService = inject(TranslateService)
  private readonly myTranslateService = inject(MyTranslateServiceService)

  constructor() {
    this.translateService.fallbackLang()

  }

  private readonly flowbite = inject(FlowbiteService)
  ngOnInit(): void {
    this.flowbite.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }


  changelang(lang: string) {
    this.myTranslateService.changeLang(lang)
    document.getElementById('dropdownDivider')?.classList.add('hidden');
  }

}
