import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'blogs', component: BlogsComponent}
];
