import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpmcommandsComponent } from './npmcommands/npmcommands.component';
import { DotnetcommandsComponent } from './dotnetcommands/dotnetcommands.component';

const routes: Routes = [
  {path: "npm", component: NpmcommandsComponent},
  {path: "dotnet", component: DotnetcommandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
