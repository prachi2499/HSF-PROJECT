import { Routes,RouterModule } from '@angular/router';
import { AdvertisinghireComponent } from './advertisinghire/advertisinghire.component';
import { EditadvertisingComponent } from './advertisinghire/editadvertising/editadvertising.component';
import { HiredesignerComponent } from './advertisinghire/hiredesigner/hiredesigner.component';
import { ChoosedesignerComponent } from './advertisinghire/choosedesigner/choosedesigner.component';
import { DetailspageComponent } from './advertisinghire/detailspage/detailspage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { CreditcardComponent } from './orderpage/creditcard/creditcard.component';
import { PlaceorderComponent } from './orderpage/placeorder/placeorder.component';
import { DebitcardComponent } from './orderpage/debitcard/debitcard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoryComponent } from './category/category.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';
import { SubcatComponent } from './subcat/subcat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HireorcontestpageComponent } from './hireorcontestpage/hireorcontestpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HireadvuserComponent } from './advertise/hireadvuser/hireadvuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserAuthguardService } from './user-authguard.service';
import { ChoosedesignerUserComponent } from './advertise/choosedesigner-user/choosedesigner-user.component';
import { UserPortfolioPageComponent } from './user-portfolio-page/user-portfolio-page.component';
import { UserOrderpageComponent } from './user-orderpage/user-orderpage.component';
import { FinalcreditcardComponent } from './user-orderpage/finalcreditcard/finalcreditcard.component';
import { UserOrderplacedComponent } from './user-orderpage/user-orderplaced/user-orderplaced.component';
import { DebituserComponent } from './user-orderpage/debituser/debituser.component';
import { HiretraininguserComponent } from './training/hiretraininguser/hiretraininguser.component';
import { ChoosedesignerTrainingUserComponent } from './training/choosedesigner-training-user/choosedesigner-training-user.component';
import { HirebrandinguserComponent } from './branding/hirebrandinguser/hirebrandinguser.component';
import { SelectdesignerBrandingComponent } from './branding/selectdesigner-branding/selectdesigner-branding.component';
import { LoginformComponent } from './user/loginform/loginform.component';
import { SignupComponent } from './user/signup/signup.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { WorkgalleryComponent } from './workgallery/workgallery.component';
import { MenuComponent } from './menu/menu.component';
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




const arr:Routes=[
  // {path:'',component:HomepageComponent},
  {path:'',component:LoginformComponent},
  {path:'menu',children:[
    {path:'',component:TopfiveorderComponent}
  ]},
    {path:'dashboard',component:MaterialDashboardComponent},

    {path:'designermenu',children:[
      {path:'',component:PhotoworkDesigComponent}

    ]},

  {path:'login',component:LoginformComponent},
  {path:'signup',component:SignupComponent},


  {path:'home',component:HomepageComponent},

  {path:'advertise_hire',component:AdvertisinghireComponent},
  {path:'editadv_hire/:id',component:EditadvertisingComponent},
  {path:'add_advertise',component:HiredesignerComponent},
  {path:'choosedesigner',component:ChoosedesignerComponent},
  {path:'details/:id',component:DetailspageComponent},
  {path:'order',component:OrderpageComponent},
  {path:'credit',component:CreditcardComponent},
  {path:'debit',component:DebitcardComponent},
  {path:'orplace',component:PlaceorderComponent},
  {path:'about',component:AboutusComponent},
  {path:'cat',component:CategoryComponent,canActivate:[UserAuthguardService]},
  {path:'logout',component:LogoutpageComponent},
  {path:'subcat/:id',component:SubcatComponent},
  {path:'hireorcontest',component:HireorcontestpageComponent},
  {path:'contact',component:ContactusComponent},
  {path:'add_adv_user/:id',component:HireadvuserComponent},
  {path:'selectdesigner_user',component:ChoosedesignerUserComponent},
  {path:'portfolio/:id',component:UserPortfolioPageComponent},
  {path:'user_order',component:UserOrderpageComponent},
  {path:'usercredit',component:FinalcreditcardComponent},
  {path:'userdebit',component:DebituserComponent},
  {path:'user_orplace',component:UserOrderplacedComponent},


  {path:'add_training_user/:id',component:HiretraininguserComponent},
  {path:'selectdesi_training',component:ChoosedesignerTrainingUserComponent},

  {path:'add_branding_user/:id',component:HirebrandinguserComponent},
  {path:'selectdesi_branding',component:SelectdesignerBrandingComponent},

  {path:'login',component:LoginformComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'changepwd',component:ChangepasswordComponent},

  {path:'gallery',component:WorkgalleryComponent},
  // {path:'menu',component:MenuComponent},
  {path:'viewadmin',component:ViewadminComponent},
  {path:'editadmin',component:EditadminprofileComponent},
  {path:'adminpwd',component:ChangepwdadminComponent},
  {path:'catadmin',component:CategoryadminComponent},
  {path:'editcatadmin/:id',component:EditcatadminComponent},

  {path:'subcatadmin',component:SubcatadminComponent},
  {path:'editsubcatadmin/:id',component:EditsubcatadminComponent},
  {path:'adminhireorcontest',component:HireorcontestadminpageComponent},

  {path:'train_hire_admin',component:TraininghireadminComponent},
  {path:'train_hireorcontest',component:TrainingHireorcontestComponent},
  {path:'edittrain_admin/:id',component:EdittrainingadminComponent},
  {path:'add_training_admin',component:HiretrainingpageComponent},
  {path:'choosedesigner_train',component:ChoosedesignerTrainComponent},

  {path:'brand_hire_admin',component:BrandingadminhireComponent},
  {path:'brand_hireorcontest',component:BrandhireorcontestComponent},
  {path:'editbrand_admin/:id',component:EditbrandingadminComponent},
  {path:'add_branding_admin',component:HirebrandingpageadminComponent},
  {path:'choosedesigner_brand',component:ChoosedesignerBrandAdminComponent},
  {path:'faq',component:FaqBotComponent},

  {path:'reviewdesig/:id',component:ReviewpageComponent},
  {path:'add_review',component:AddreviewComponent},
  {path:'review_admin/:id',component:ReviewAdminComponent},
  {path:'add_review_admin',component:AddReviewAdminComponent},
  {path:'review_desig',component:DesiReviewsComponent},
  {path:'pastorder',component:PastorderDesignerComponent},



  {path:'viewdesigner',component:MyprofileDesignerComponent},
  {path:'editdesigner_profile',component:EditprofileDesignerComponent},
  {path:'designerpwd',component:ChangepwdDesignerComponent},

  {path:'viewalldesig_admin',component:ViewalldesignerAdminComponent},
  {path:'ordertopfive',component:TopfiveorderComponent},

  {path:'brand_contest_user/:id',component:BrandAddContestUserComponent},
  {path:'chooseduration',component:ChoosedurationBrandComponent},
  {path:'contestwork',component:ContestworkComponent},

  {path:'uploadimg',component:DesignerUploadImgComponent},
  {path:'contestcheck',component:ContestuploadedworkComponent},
  {path:'selectcat_contest',component:SelectcatContestComponent},
  {path:'congo',component:CongratspageComponent},
  {path:'dselect/:id1',component:DFinalSelectedComponent},

  {path:'adv_contest_user/:id',component:AdvAddContestComponent},
  {path:'chooseduration_adv',component:AdvDurationContestComponent},
  {path:'contestcheck_adv',component:ContestcheckAdvComponent},

  {path:'train_contest_user/:id',component:AddTrainContestComponent},
  {path:'chooseduration_train',component:TrainAddDurationContestComponent},
  {path:'contestcheck_train',component:ContestcheckTrainComponent},

  {path:'notification',component:NotificationContestComponent},









  {path:'not-found',component:NotfoundComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}







];
export const routing=RouterModule.forRoot(arr);
