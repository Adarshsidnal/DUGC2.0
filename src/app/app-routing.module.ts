import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { MinorAnalysisMainComponent } from './minor-analysis/minor-analysis-main/minor-analysis-main.component';
import { NavbarComponent } from './minor-analysis/navbar/navbar.component';
import { UploadSheetsComponent } from './minor-analysis/upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './minor-analysis/dugc-chairman/dugc-chairman.component';
import { DugcComponent } from './minor-analysis/dugc/dugc.component';
import { CoordinatorComponent } from './minor-analysis/coordinator/coordinator.component';
import { SingleSheetUploadComponent } from './minor-analysis/single-sheet-upload/single-sheet-upload.component';
import { ConsolidatedSheetUploadComponent } from './minor-analysis/consolidated-sheet-upload/consolidated-sheet-upload.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './minor-analysis/charts/charts.component';

import { DeleteSheetComponent } from './minor-analysis/delete-sheet/delete-sheet.component';
import { UploadResultComponent } from './minor-analysis/upload-result/upload-result.component';
import { AppComponent } from './app.component';
import { CourseWithdrawalMainComponent } from './course-withdrawal/course-withdrawal-main/course-withdrawal-main.component';
// Course withdrawal components
import { CourseWithdrawalComponent } from './course-withdrawal/course-withdrawal/course-withdrawal.component';
import { CourseWidthdrawalReportComponent } from './course-withdrawal/course-widthdrawal-report/course-widthdrawal-report.component';
import { CourseWithdrawalApplicationComponent } from './course-withdrawal/course-withdrawal-application/course-withdrawal-application.component';
import { WithdrawalNavbarComponent } from './course-withdrawal/navbar/navbar.component';
import { EndsemAnalysisMainComponent } from './endsem-analysis/endsem-analysis-main/endsem-analysis-main.component';

//End sem analysis component
import { LoginComponent } from './endsem-analysis/login/login.component';
import { AnalysisComponent } from './endsem-analysis/analysis/analysis.component';

//Lab analysis
// import { LabAnalysisMainComponent } from '.labmain/labmain.component';
import { LabmainComponent } from './labmain/labmain.component';
import { HomeComponent } from './labmain/home/home.component';
import { UploadComponent } from './labmain/upload/upload.component';
import { Upload5Component } from './labmain/upload5/upload5.component';
import { Upload7Component } from './labmain/upload7/upload7.component';
import { DxChartModule } from 'devextreme-angular';
import { Sem8Component } from './labmain/sem8/sem8.component';

//Circular

import { LoginComponentCircular } from './circular/login/login.component';
import { CircularComponent } from './circular/circular/circular.component';
import { MintsComponent } from './circular/mints/mints.component';
import { NoticeComponent } from './circular/notice/notice.component';
import { LayoutComponent } from './circular/layout/layout.component';
import { AuthService } from './circular/auth.service';
import { combineLatest, materialize } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { CmmComponent } from './circular/cmm/cmm.component';
import { CamComponent } from './circular/cam/cam.component';
import { CcwComponent } from './circular/ccw/ccw.component';
import { CinComponent } from './circular/cin/cin.component';
import { CerComponent } from './circular/cer/cer.component';
import { NmComponent } from './circular/nm/nm.component';
import { NaComponent } from './circular/na/na.component';
import { NwComponent } from './circular/nw/nw.component';
import { NsComponent } from './circular/ns/ns.component';
import { HomeComponentCircular } from './circular/home/home.component';
import { NiComponent } from './circular/ni/ni.component';
import { NavComponent } from './circular/nav/nav.component';
import { CircularMainComponent } from './circular/circular-main/circular-main.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { SendComponent } from './circular/send/send.component';
//eligibility list
// import { HomeComponent } from './eligibility/home/home.component';
import { LabComponent } from './eligibility/lab/lab.component';
import { ApListComponent } from './eligibility/ap-list/ap-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadStudentComponent } from './eligibility/upload-student/upload-student.component';
import { LabresultsComponent } from './eligibility/lab/labresults/labresults.component';
import { TheoryComponent } from './eligibility/ap-list/theory/theory.component';
import { Uploadlist2Component } from './eligibility/upload-student/uploadlist2/uploadlist2.component';
import { Uploadlist3Component } from './eligibility/upload-student/uploadlist3/uploadlist3.component';
import { EligibilityHomeComponent } from './eligibility/eligibility-home/eligibility-home.component';
//makeupminor
import { MinorMainComponent } from './makeup-minor/minor-main/minor-main.component';
import { MakeupMinorComponent } from './makeup-minor/makeup-minor.component';
import { StudenteditComponent } from './makeup-minor/studentedit/studentedit.component';
import { StudentlistComponent } from './makeup-minor/studentlist/studentlist.component';
import { AddStudentComponent } from './makeup-minor/add-student/add-student.component';
import { RegisterComponent } from './makeup-minor/register/register.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { DugcLoginComponent } from './dugc-login/dugc-login.component';
import { AuthMainService } from './auth-main.service';
import { GuardService } from './guards/guard.service';
import { DugcService } from './guards/dugc.service';
import { CoordinatorService } from './guards/coordinator.service';
import { DugcRegisterComponent } from './dugc-register/dugc-register.component';
import { AboutUsComponent } from './Navbar/about-us/about-us.component';
import { MembersComponentComponent } from './Navbar/members-component/members-component.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactUsComponent } from './Navbar/contact-us/contact-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import * as path from 'path';
import { ConfirmPasswordComponent } from './forgot-password/confirm-password/confirm-password.component';
import { Dugc1Component } from './labmain/dugc1/dugc1.component';
import { ChartComponent } from './labmain/chart/chart.component';
import { SingleComponent } from './labmain/single/single.component';
import { CoordComponent } from './labmain/coord/coord.component';
import { ConsolidateComponent } from './labmain/consolidate/consolidate.component';
import { DeleteComponent } from './labmain/delete/delete.component';

const routes: Routes = [
  { path: 'loginMain', component: DugcLoginComponent },
  { path: 'registerMain', component: DugcRegisterComponent },
  {path:'aboutUs',component:AboutUsComponent  },
  {path:'members-component',component:MembersComponentComponent},
  {path:'forget-password',component:ForgotPasswordComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'forget-pass',component:ForgotPasswordComponent},
  {path:'confirmPass',component:ConfirmPasswordComponent},
  {
    path: 'homeMain',
    component: MainHomepageComponent,
    // canActivate: [GuardService],
  },
  {path:'add-user',component:AddUserComponent},
  {
    path: 'Minor',
    component: MinorAnalysisMainComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'dugc_chairman',
        component: DugcChairmanComponent,
      },
      { path: 'dugc', component: DugcComponent },
      { path: 'charts', component: ChartsComponent },
      {
        path: 'coordinator',
        component: CoordinatorComponent,
        children: [
          {
            path: 'single',
            component: SingleSheetUploadComponent,
          },
          {
            path: 'consolidated',
            component: ConsolidatedSheetUploadComponent,
          },
          {
            path: 'delete',
            component: DeleteSheetComponent,
          },
          {
            path: 'upload_status',
            component: UploadResultComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'Withdrawal',
    component: CourseWithdrawalMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'Home',canActivate:[DugcService], component: CourseWithdrawalComponent },
      { path: 'Application',canActivate:[DugcService], component: CourseWithdrawalApplicationComponent },
      { path: 'Report',canActivate:[DugcService], component: CourseWidthdrawalReportComponent },
    ],
  },
  {
    path: 'Endsem',
    component: EndsemAnalysisMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'analysis', component: AnalysisComponent },
    ],
  },
  {
    path: 'Labmain',
    component: LabmainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'upload5', component: Upload5Component },
      { path: 'upload7', component: Upload7Component },
      { path: 'sem8', component: Sem8Component },
      { path:'chart', component:ChartComponent},
      {path:'coordinator1',
        component:CoordComponent,
        children: [
        {
          path: 'singleSheet',
          component: SingleComponent,
        },
        {
          path: 'consolidatedUpload',
          component: ConsolidateComponent,
        },
        {
          path: 'deleteDel',
          component: DeleteComponent,
        },
        {
          path: 'upload_statusUpload',
          component: UploadResultComponent,
        },
      ]},
      {path:'dugcChairman',component:Dugc1Component},
      { path: '', redirectTo: '/Labmain/home', pathMatch: 'full' },
    ],
  },
  {
    path: 'Circular',
    component: CircularMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'home', component: HomeComponentCircular },
      { path: 'ns', component: NsComponent },
      { path: 'ni', component: NiComponent },
      { path: 'nw', component: NwComponent },
      { path: 'na', component: NaComponent },
      { path: 'nm', component: NmComponent },
      { path: 'cer', component: CerComponent },
      { path: 'cin', component: CinComponent },
      { path: 'ccw', component: CcwComponent },
      { path: 'cam', component: CamComponent },
      { path: 'cmm', component: CmmComponent },
      { path: 'circular', component: CircularComponent },
      { path: 'mints', component: MintsComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'nav', component: NavComponent },
      { path: 'send', component: SendComponent },
      {
        path: 'login',
        component: LoginComponentCircular,
      },
    ],
  },
  {
    path: 'eligibility',
    component: EligibilityComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'ap-list',
        component: ApListComponent,canActivate:[DugcService],
        children: [{ path: 'theoryresults', component: TheoryComponent }],
      },
      {
        path: 'lab',canActivate:[DugcService],
        component: LabComponent,
        children: [{ path: 'labresults', component: LabresultsComponent }],
      },
      {
        path: 'upload',canActivate:[CoordinatorService],
        component: UploadStudentComponent,
        children: [
          { path: 'uploadtheory', component: Uploadlist2Component },
          { path: 'uploadlab', component: Uploadlist3Component },
        ],
      },
    ],
  },

  {
    path: 'makeup',
    component: MinorMainComponent,
    canActivate: [GuardService],
    children: [
      // {path: 'login',component:LoginComponent},
      //  {path: 'register',component:RegisterComponent},
      { path: 'add-student',canActivate:[DugcService], component: AddStudentComponent },
      { path: 'edit-student',canActivate:[DugcService], component: StudenteditComponent },
      { path: 'list-student',canActivate:[DugcService], component: StudentlistComponent },
      //  {path:'',redirectTo:'/makeup/add-student',pathMatch: 'full'}
    ],
  },
  { path: '', component: MainHomepageComponent },
  { path: '**', component: PagenotfoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
