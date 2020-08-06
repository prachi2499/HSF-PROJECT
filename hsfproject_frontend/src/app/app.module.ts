import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {CrystalGalleryModule} from 'ngx-crystal-gallery';
//import angularSuperGallery from 'angular-super-gallery';
// import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdvertisinghireComponent } from './advertisinghire/advertisinghire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatPaginatorModule, MatSortModule,MatDatepickerModule,MatFormFieldModule,MatProgressSpinnerModule,MatRadioModule,MatInputModule,MatButtonModule,MatMenuModule,MatIconModule,MatChipsModule,MatTooltipModule,MatTableModule,MatSelectModule,MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditadvertisingComponent } from './advertisinghire/editadvertising/editadvertising.component';
import { routing } from './app.routing';
import { HiredesignerComponent } from './advertisinghire/hiredesigner/hiredesigner.component';
import { ChoosedesignerComponent } from './advertisinghire/choosedesigner/choosedesigner.component';
import { DetailspageComponent } from './advertisinghire/detailspage/detailspage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { CreditcardComponent } from './orderpage/creditcard/creditcard.component';
import { PlaceorderComponent } from './orderpage/placeorder/placeorder.component';
import { DebitcardComponent } from './orderpage/debitcard/debitcard.component';
import { CreditdebitDirective } from './creditdebit.directive';
import { AppheaderComponent } from './appheader/appheader.component';
import { CategoryComponent } from './category/category.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';
import { SubcatComponent } from './subcat/subcat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HireorcontestpageComponent } from './hireorcontestpage/hireorcontestpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HireadvuserComponent } from './advertise/hireadvuser/hireadvuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChoosedesignerUserComponent } from './advertise/choosedesigner-user/choosedesigner-user.component';
import { UserPortfolioPageComponent } from './user-portfolio-page/user-portfolio-page.component';
import { UserOrderpageComponent } from './user-orderpage/user-orderpage.component';

import { DebituserComponent } from './user-orderpage/debituser/debituser.component';
import { UserOrderplacedComponent } from './user-orderpage/user-orderplaced/user-orderplaced.component';
import { FinalcreditcardComponent } from './user-orderpage/finalcreditcard/finalcreditcard.component';
import { HiretraininguserComponent } from './training/hiretraininguser/hiretraininguser.component';
import { ChoosedesignerTrainingUserComponent } from './training/choosedesigner-training-user/choosedesigner-training-user.component';
import { HirebrandinguserComponent } from './branding/hirebrandinguser/hirebrandinguser.component';
import { SelectdesignerBrandingComponent } from './branding/selectdesigner-branding/selectdesigner-branding.component';
import { LoginformComponent } from './user/loginform/loginform.component';
import { SignupComponent } from './user/signup/signup.component';

import { SliderModule } from 'angular-image-slider';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { WorkgalleryComponent } from './workgallery/workgallery.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ViewadminComponent } from './admin/viewadmin/viewadmin.component';
import { EditadminprofileComponent } from './admin/editadminprofile/editadminprofile.component';
import { ChangepwdadminComponent } from './admin/changepwdadmin/changepwdadmin.component';
import { CategoryadminComponent } from './admin/categoryadmin/categoryadmin.component';
import { EditcatadminComponent } from './admin/categoryadmin/editcatadmin/editcatadmin.component';
import { SubcatadminComponent } from './admin/subcatadmin/subcatadmin.component';
import { EditsubcatadminComponent } from './admin/subcatadmin/editsubcatadmin/editsubcatadmin.component';
import { HireorcontestadminpageComponent } from './admin/hireorcontestadminpage/hireorcontestadminpage.component';
import { TraininghireadminComponent } from './admin/traininghireadmin/traininghireadmin.component';
import { TrainingHireorcontestComponent } from './admin/training-hireorcontest/training-hireorcontest.component';
import { EdittrainingadminComponent } from './admin/traininghireadmin/edittrainingadmin/edittrainingadmin.component';
import { HiretrainingpageComponent } from './admin/traininghireadmin/hiretrainingpage/hiretrainingpage.component';
import { ChoosedesignerTrainComponent } from './admin/traininghireadmin/choosedesigner-train/choosedesigner-train.component';
import { BrandingadminhireComponent } from './admin/brandingadminhire/brandingadminhire.component';
import { BrandhireorcontestComponent } from './admin/brandingadminhire/brandhireorcontest/brandhireorcontest.component';
import { EditbrandingadminComponent } from './admin/brandingadminhire/editbrandingadmin/editbrandingadmin.component';
import { HirebrandingpageadminComponent } from './admin/brandingadminhire/hirebrandingpageadmin/hirebrandingpageadmin.component';
import { ChoosedesignerBrandAdminComponent } from './admin/brandingadminhire/choosedesigner-brand-admin/choosedesigner-brand-admin.component';
import { FaqBotComponent } from './faq-bot/faq-bot.component';
import { DesignermenuComponent } from './designermenu/designermenu.component';
import { MyprofileDesignerComponent } from './designer/myprofile-designer/myprofile-designer.component';
import { EditprofileDesignerComponent } from './designer/editprofile-designer/editprofile-designer.component';
import { ChangepwdDesignerComponent } from './designer/changepwd-designer/changepwd-designer.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { ViewalldesignerAdminComponent } from './viewalldesigner-admin/viewalldesigner-admin.component';
import { AddreviewComponent } from './reviewpage/addreview/addreview.component';
import { ReviewAdminComponent } from './admin/review-admin/review-admin.component';
import { AddReviewAdminComponent } from './admin/add-review-admin/add-review-admin.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { TopfiveorderComponent } from './topfiveorder/topfiveorder.component';
import { BrandAddContestUserComponent } from './contestuser/brand-add-contest-user/brand-add-contest-user.component';
import { ChoosedurationBrandComponent } from './contestuser/chooseduration-brand/chooseduration-brand.component';
import { ContestworkComponent } from './contestuser/contestwork/contestwork.component';
import { DesignerUploadImgComponent } from './designer/designer-upload-img/designer-upload-img.component';
import { ContestuploadedworkComponent } from './contestuser/contestuploadedwork/contestuploadedwork.component';
import { CongratspageComponent } from './contestuser/congratspage/congratspage.component';
import { DFinalSelectedComponent } from './contestuser/d-final-selected/d-final-selected.component';
import { DesiReviewsComponent } from './designer/desi-reviews/desi-reviews.component';
import { PastorderDesignerComponent } from './designer/pastorder-designer/pastorder-designer.component';
import { PhotoworkDesigComponent } from './designer/photowork-desig/photowork-desig.component';
import { AdvAddContestComponent } from './contestuser/adv-add-contest/adv-add-contest.component';
import { AdvDurationContestComponent } from './contestuser/adv-duration-contest/adv-duration-contest.component';
import { SelectcatContestComponent } from './contestuser/selectcat-contest/selectcat-contest.component';
import { ContestcheckAdvComponent } from './contestuser/contestcheck-adv/contestcheck-adv.component';
import { AddTrainContestComponent } from './contestuser/add-train-contest/add-train-contest.component';
import { TrainAddDurationContestComponent } from './contestuser/train-add-duration-contest/train-add-duration-contest.component';
import { ContestcheckTrainComponent } from './contestuser/contestcheck-train/contestcheck-train.component';
import { NotificationContestComponent } from './contestuser/notification-contest/notification-contest.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AdvertisinghireComponent,
    EditadvertisingComponent,
    HiredesignerComponent,
    ChoosedesignerComponent,
    DetailspageComponent,
    OrderpageComponent,
    CreditcardComponent,
    PlaceorderComponent,
    DebitcardComponent,
    CreditdebitDirective,
    AppheaderComponent,
    CategoryComponent,
    LogoutpageComponent,
    SubcatComponent,
    HomepageComponent,
    HireorcontestpageComponent,
    ContactusComponent,
    HireadvuserComponent,
    NotfoundComponent,
    ChoosedesignerUserComponent,
    UserPortfolioPageComponent,
    UserOrderpageComponent,

    DebituserComponent,
    UserOrderplacedComponent,
    FinalcreditcardComponent,
    HiretraininguserComponent,
    ChoosedesignerTrainingUserComponent,
    HirebrandinguserComponent,
    SelectdesignerBrandingComponent,
    LoginformComponent,
    SignupComponent,
    ViewuserComponent,
    EdituserComponent,
    ChangepasswordComponent,
    WorkgalleryComponent,
    MenuComponent,
    ViewadminComponent,
    EditadminprofileComponent,
    ChangepwdadminComponent,
    CategoryadminComponent,
    EditcatadminComponent,
    SubcatadminComponent,
    EditsubcatadminComponent,
    HireorcontestadminpageComponent,
    TraininghireadminComponent,
    TrainingHireorcontestComponent,
    EdittrainingadminComponent,
    HiretrainingpageComponent,
    ChoosedesignerTrainComponent,
    BrandingadminhireComponent,
    BrandhireorcontestComponent,
    EditbrandingadminComponent,
    HirebrandingpageadminComponent,
    ChoosedesignerBrandAdminComponent,
    FaqBotComponent,
    DesignermenuComponent,
    MyprofileDesignerComponent,
    EditprofileDesignerComponent,
    ChangepwdDesignerComponent,
    ReviewpageComponent,
    ViewalldesignerAdminComponent,
    AddreviewComponent,
    ReviewAdminComponent,
    AddReviewAdminComponent,
    MaterialDashboardComponent,
    TopfiveorderComponent,
    BrandAddContestUserComponent,
    ChoosedurationBrandComponent,
    ContestworkComponent,
    DesignerUploadImgComponent,
    ContestuploadedworkComponent,
    CongratspageComponent,
    DFinalSelectedComponent,
    DesiReviewsComponent,
    PastorderDesignerComponent,
    PhotoworkDesigComponent,
    AdvAddContestComponent,
    AdvDurationContestComponent,
    SelectcatContestComponent,
    ContestcheckAdvComponent,
    AddTrainContestComponent,
    TrainAddDurationContestComponent,
    ContestcheckTrainComponent,
    NotificationContestComponent,


  ],
  imports: [
    BrowserModule,
    // ShowHidePasswordModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SliderModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
     MatSortModule,
     MatGridListModule
     //CrystalGalleryModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
