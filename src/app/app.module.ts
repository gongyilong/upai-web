import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login/login.component';
import { PassportComponent } from './layout/login/passport/passport.component';
import { BackComponent } from './layout/back/back/back.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationComponent } from './business/back/dashboard/application/application.component';
import { ApplicationDetailsComponent } from './business/back/dashboard/application-details/application-details.component';
import { HeadUserComponent } from './layout/back/head-user/head-user.component';
import { ToolComponent } from './business/back/data/tool/tool.component';
import { DatasetComponent } from './business/back/data/dataset/dataset.component';
import { UserInfoComponent } from './business/back/users/user-info/user-info.component';
import { UserPermissionComponent } from './business/back/users/user-permission/user-permission.component';
import { PersonInfoComponent } from './business/back/personal/person-info/person-info.component';
import { PersonSettingComponent } from './business/back/personal/person-setting/person-setting.component';
import { DocumentComponent } from './business/back/dashboard/document/document.component';
import { WorkplaceComponent } from './business/back/dashboard/workplace/workplace.component';
import { CrowdSourcingComponent } from './business/back/data/crowd-sourcing/crowd-sourcing.component';
import { DeviceCameraComponent } from './business/back/devices/device-camera/device-camera.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PassportComponent,
    BackComponent,
    ApplicationComponent,
    ApplicationDetailsComponent,
    HeadUserComponent,
    ToolComponent,
    DatasetComponent,
    UserInfoComponent,
    UserPermissionComponent,
    PersonInfoComponent,
    PersonSettingComponent,
    DocumentComponent,
    WorkplaceComponent,
    CrowdSourcingComponent,
    DeviceCameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzAvatarModule,
    NzDatePickerModule,
    NzSelectModule,
    NzDividerModule,
    NzTabsModule,
    NzTreeModule,
    NzTransferModule,
    NzTableModule,
    NzCardModule,
    NzDropDownModule,
    NzListModule,
    NzUploadModule,
    NzMenuModule,
    NzTagModule,
    NzCheckboxModule,
    NzLayoutModule,
    NzCollapseModule,
    NzInputModule,
    NzIconModule,
    NzFormModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
