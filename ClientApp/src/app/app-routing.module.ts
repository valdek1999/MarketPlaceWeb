import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { SendContractsComponent } from "./modules/send-contracts/send-contracts.component";
import { SendContractComponent } from "./modules/send-contract/send-contract.component";
import { ManageConsentsComponent } from "./modules/manage-consents/manage-consents.component";

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'send-contracts',
    component: SendContractsComponent
  },
  {
    path: 'send-contract',
    component: SendContractComponent
  },
  {
    path: 'manage-consents',
    component: ManageConsentsComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
