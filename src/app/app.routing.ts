// https://angular.io/docs/ts/latest/guide/router.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ExploreComponent } from './explore/explore.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
    {
        path:"",
        component: LandingPageComponent,
    },
    {
        path:"profile/:address",
        component: ProfileComponent,
    },
    {
        path:"profile",
        component: ProfileComponent,
    },
    {
      path:"explore",
      component: ExploreComponent,
    },
    {
      path:"dashboard",
      component: DashboardComponent,
    },
    // {
    //     path:"videos",
    //     component: VideoListComponent,
    // },
    // {
    //     path:"videos/:slug",
    //     component: VideoDetailComponent,
    // },
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}







