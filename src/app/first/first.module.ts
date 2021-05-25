import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from 'src/app/first/first.component';
import { FirstRoutingModule } from 'src/app/first/first-routing.module';
// import { TabsModule } from 'bootstrap/';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    // TabsModule
  ]
})
export class FirstModule { }
