import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileSettingsComponent } from './user-profile/components/profile-settings/profile-settings.component';
import { UserProfileModule } from './user-profile/user-profile.module';

const routes: Routes= [{
  path:'',
  loadChildren: () => 
    import('./user-profile/user-profile.module').then((m) => m.UserProfileModule)
}]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
