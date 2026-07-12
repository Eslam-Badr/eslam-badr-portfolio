import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../../../core/services/flowbite/flowbite.service';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MyTranslateServiceService } from '../../../../core/services/my-translate-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  private readonly translateService = inject(TranslateService)
  private readonly myTranslateService = inject(MyTranslateServiceService)
  private readonly spinner = inject(NgxSpinnerService)

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
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
      this.myTranslateService.changeLang(lang)
    }, 1000);
  }

}
