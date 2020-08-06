var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var advertising=require('./routes/advertising_hire_routes');
var addadv=require('./routes/a_hire_add_routes');
var useradv=require('./routes/user_adv_routes');
var category=require('./routes/category_routes');
var subcategory=require('./routes/subcategory_routes');
var designer=require('./routes/getdesigners_routes');
var similar=require('./routes/similardesigner_routes');
var portfolio=require('./routes/adv_portfolio_routes');
var orderdetail=require('./routes/order_routes');
var order_designer_name=require('./routes/order_designername_routes');
var order_subcat_name=require('./routes/order_subcatname_routes');

var designers=require('./routes/desgners');


var training=require('./routes/t_hire_routes');
var delall_training=require('./routes/t_deleteall_routes');
var t_designers=require('./routes/t_designers_routes');
var t_byuser=require('./routes/traininguser_routes');
var t_getdesigner=require('./routes/t_getdesigner_routes');


var branding=require('./routes/branding_hire_routes');
var brand_img=require('./routes/b_update_img_routes');
var brand_user=require('./routes/b_user_branding_routes');
var brand_designers=require('./routes/brand_designer_routes');
var brandgetdesigners=require('./routes/brand_getdesigner_routes');


var user_login=require('./routes/user_login_routes');
var user_signup=require('./routes/signup_routes');
var user_viewprofile=require('./routes/viewprofile_routes');
var changepwd=require('./routes/changepwd_routes');

var catdelall=require('./routes/cat_deleteall_routes');
var delsubcatbycat=require('./routes/delsubcatbycat_routes');
var subcatdelall=require('./routes/subcat_delall_routes');
var catsubcat=require('./routes/catsubcat_routes');

var workgall=require('./routes/workgall_routes');
var brandworkgall=require('./routes/work_brand_gall_routes');

var review=require('./routes/review_routes');
var reviewbyuser=require('./routes/reviewbyuser_routes');
var userreview=require('./routes/userreview_routes');

var viewalldesig=require('./routes/viewalldesig_routes');
var forgetpass=require('./routes/forgetpass_routes');
var forget_user=require('./routes/forget_user_routes');

var orderfive=require('./routes/gettopfive_routes');

//bcontest

var brandingcontest=require('./routes/branding_contest_routes');
var designerscontest=require('./routes/designer_contest_routes');
var brandingContestUser=require('./routes/userbrandingcontest_routes');
var b_duration_contest=require('./routes/b_timeduration_routes');
var Image_contest=require('./routes/user_contest_imgupload_routes');
var dname_contest=require('./routes/updatedesigner_contest_routes');

var uploadimg_contest=require('./routes/designer_upload_routes');
var dname_contest_ma=require('./routes/getdesignname_contest_routes');

var pastorder=require('./routes/pastorder_routes');
var pastordername=require('./routes/pastorder_name_routes');
var photo=require('./routes/photo_designer_routes');


//advcont

var advertising_contest=require('./routes/adv_contest_routes');
var advcontestbyuser=require('./routes/a_contestuser_routes');
var advcontest_desigers=require('./routes/a_contest_designer_routes');
var adv_duration_contest=require('./routes/a_contest_duration');
var adv_delall_contest=require('./routes/a_contest_delall_routes');

var adv_update_contest=require('./routes/update_adv_contest_designer_routes');

//traincontest

var training_contest=require('./routes/train_contest_routes');
var trainingcontestbyuser=require('./routes/train_contest_user_routes');
var tcontest_designers=require('./routes/train_contest_designer_routes');
var delalltrainingcontest=require('./routes/train_delall_contest_routes');
var duration_train_contest=require('./routes/train_duration_contest_routes');
var train_update_contest=require('./routes/train_update_designer_routes_contest');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/advertising',advertising);
app.use('/addadv',addadv);
app.use('/useradv',useradv);
app.use('/category',category);
app.use('/subcategory',subcategory);
app.use('/designer',designer);
app.use('/designers',designers);
app.use('/similar',similar);
app.use('/portfolio',portfolio);
app.use('/orderdetail',orderdetail);
app.use('/order_designer_name',order_designer_name);
app.use('/order_subcat_name',order_subcat_name);

app.use('/training',training);
app.use('/delall_training',delall_training);
app.use('/t_designers',t_designers);
app.use('/t_byuser',t_byuser);
app.use('/t_getdesigner',t_getdesigner);

app.use('/branding',branding);
app.use('/brand_img',brand_img);
app.use('/brand_user',brand_user);
app.use('/brand_designers',brand_designers);
app.use('/brandgetdesigners',brandgetdesigners);

app.use('/user_login',user_login);
app.use('/user_signup',user_signup);
app.use('/user_viewprofile',user_viewprofile);
app.use('/changepwd',changepwd);

app.use('/catdelall',catdelall);
app.use('/delsubcatbycat',delsubcatbycat);
app.use('/subcatdelall',subcatdelall);
app.use('/catsubcat',catsubcat);

app.use('/workgall',workgall);
app.use('/brandworkgall',brandworkgall);

app.use('/review',review);
app.use('/reviewbyuser',reviewbyuser);
app.use('/userreview',userreview);

app.use('/viewalldesig',viewalldesig);
app.use('/forgetpass',forgetpass);
app.use('/forget_user',forget_user);
app.use('/orderfive',orderfive);

app.use('/brandingcontest',brandingcontest);
app.use('/designerscontest',designerscontest);
app.use('/brandingContestUser',brandingContestUser);
app.use('/b_duration_contest',b_duration_contest);
app.use('/Image_contest',Image_contest);
app.use('/dname_contest',dname_contest);

app.use('/uploadimg_contest',uploadimg_contest);

app.use('/dname_contest_ma',dname_contest_ma);

app.use('/pastorder',pastorder);
app.use('/pastordername',pastordername);
app.use('/photo',photo);

app.use('/advertisingcontest',advertising_contest);
app.use('/advcontestbyuser',advcontestbyuser);
app.use('/advcontest_desigers',advcontest_desigers);
app.use('/adv_duration_contest',adv_duration_contest);
app.use('/adv_delall_contest',adv_delall_contest);

app.use('/adv_update_contest',adv_update_contest);

app.use('/trainingcontest',training_contest);
app.use('/trainingcontestbyuser',trainingcontestbyuser);
app.use('/tcontest_designers',tcontest_designers);
app.use('/delalltrainingcontest',delalltrainingcontest);
app.use('/duration_train_contest',duration_train_contest);
app.use('/train_update_contest',train_update_contest);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
