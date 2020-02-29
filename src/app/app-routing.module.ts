import { TrucoComponent } from './truco/truco.component';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component';
import { Bin2DecComponent } from './bin2-dec/bin2-dec.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "Bin2Dec", component: Bin2DecComponent, data: { title: "Bin2Dec" } },
  { path: "Border-radius-Previewer", component: BorderRadiusPreviewerComponent, data: { title: "Border-radius Previewer" } },
  { path: "Truco", component: TrucoComponent, data: { title: "Truco" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
