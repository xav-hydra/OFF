import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AddProduitPage} from '../pages/addProduit/addProduit';
import {RecherchePage} from '../pages/recherche/recherche';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatsPage} from "../pages/stats/stats";

@NgModule({
  declarations: [
    MyApp,
    StatsPage,
    RecherchePage,
    ItemDetailsPage,
    AddProduitPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StatsPage,
    AddProduitPage,
    RecherchePage,
    ItemDetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
