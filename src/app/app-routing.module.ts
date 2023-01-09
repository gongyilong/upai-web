import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login/login.component';
import { BackComponent } from './layout/back/back/back.component';
import { ApplicationComponent } from './business/back/dashboard/application/application.component';
import { ApplicationDetailsComponent } from './business/back/dashboard/application-details/application-details.component';
import { ToolComponent } from './business/back/data/tool/tool.component';
import { DatasetComponent } from './business/back/data/dataset/dataset.component';
import { PersonInfoComponent } from './business/back/personal/person-info/person-info.component';
import { DocumentComponent } from './business/back/dashboard/document/document.component';
import { PersonSettingComponent } from './business/back/personal/person-setting/person-setting.component';
import { UserInfoComponent } from './business/back/users/user-info/user-info.component';
import { UserPermissionComponent } from './business/back/users/user-permission/user-permission.component';
import { CrowdSourcingComponent } from './business/back/data/crowd-sourcing/crowd-sourcing.component';
import { DeviceCameraComponent } from './business/back/devices/device-camera/device-camera.component';
import { WorkplaceComponent } from './business/back/dashboard/workplace/workplace.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'back', component: BackComponent,
    children: [
      { path: 'ai/application', component: ApplicationComponent },
      { path: 'ai/document', component: DocumentComponent },
      { path: 'ai/workplace', component: WorkplaceComponent },
      { path: 'detail/:id', component: ApplicationDetailsComponent },
      { path: 'data/tool', component: ToolComponent },
      { path: 'data/crowd-sourcing', component: CrowdSourcingComponent },
      { path: 'data/dataset', component: DatasetComponent },
      { path: 'devices/camera', component: DeviceCameraComponent },
      { path: 'users/info', component: UserInfoComponent },
      { path: 'users/permissions', component: UserPermissionComponent },
      { path: 'personal/info', component: PersonInfoComponent },
      { path: 'personal/setting', component: PersonSettingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
