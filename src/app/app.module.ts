import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DemoComponent } from './demo/demo.component';
import { ChildsComponent } from './childs/childs.component';
import{FormsModule} from '@angular/forms';
import { UsdInrPipesPipe } from './pipes/usd-inr-pipes.pipe'
import{ReactiveFormsModule} from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DemoComponent,
    ChildsComponent,
    UsdInrPipesPipe,
    RedElDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
