import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer/footer.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ContactMeComponent } from "./features/contact-me/contact-me.component";
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactMeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // protected readonly title = signal('portfolio');
  private readonly spinner = inject(NgxSpinnerService);


  ngOnInit(): void {
    this.spinner.show()
       setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }
  
}
