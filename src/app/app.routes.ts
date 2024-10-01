import { Routes } from '@angular/router';
import { HomeComponent } from './homePage/app.homePage';
import { ProjectComponent} from './projects/app.projects';
import { SkillsComponent } from './skills/app.skills';
import { ResumeComponent} from './resume/app.resume';
import { AboutComponent } from './aboutMe/app.about';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "projects", component: ProjectComponent},
    {path: "skills", component: SkillsComponent},
    {path: "resume", component: ResumeComponent},
    {path: "aboutme", component: AboutComponent},
];
