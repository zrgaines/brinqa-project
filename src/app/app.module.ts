import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us.component';
import { ImportanceComponent } from './importance.component';
import { HomepageComponent } from './homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdTabsModule, MdInputModule, MdMenuModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactUsComponent,
    ImportanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTabsModule,
    MdInputModule,
    MdMenuModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'contact',
        component: ContactUsComponent
      },
      {
        path: '',
        component: HomepageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
