import { AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild, WritableSignal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent {

  isFormValid: WritableSignal<boolean> = signal(false);
  showError: WritableSignal<boolean> = signal(false);

  showScrollTop = false;
  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 1800;
  }


  // validation
  checkForm(email: string, message: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.isFormValid.set(
      emailRegex.test(email.trim()) &&
      message.trim().length > 20);

    if (this.isFormValid()) {
      this.showError.set(false)
    }
  }

  // send func
  onSend(event: Event) {
    if (!this.isFormValid()) {
      event.preventDefault();

      this.showError.set(true);

      setTimeout(() => {
        this.showError.set(false);
      }, 1000);

      return;
    }
  }



}