import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapEditComponent } from '../components/map/map-edit/map-edit.component';
import { MapComponent } from '../components/map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  entryComponents: [MapEditComponent],
  declarations: [AppComponent, MapComponent, MapEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAp9T1Hv4pnB9MWxeqRacTLXrV9cTc-mzA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
