import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer/footer.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ContactMeComponent } from "./features/contact-me/contact-me.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactMeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
