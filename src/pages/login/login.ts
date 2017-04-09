import { Component } from '@angular/core';
import {ServiceTask } from '../../providers/service-task';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Register } from '../register/register';
import { NavController ,LoadingController, AlertController,ToastController,ModalController,ViewController} from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import {nameValidator, passwordValidator} from '../../providers/validator';
import { StorageService } from "../../providers/storage-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
    providers: [ServiceTask,StorageService]
})


export class LoginPage {

  private logindata: FormGroup;

	// public user = {
	// 	username : '',
	// 	password : '',
  //   headface : 'assets/images/2.jpg'
	// }

  constructor(public navCtrl: NavController ,
  			  public loadingCtrl: LoadingController,
  			  private alertCtrl: AlertController,
  			  private toastCtrl: ToastController,
  			  public modalCtrl: ModalController,
          public viewCtrl : ViewController,
          public service: ServiceTask,
          private formBuilder: FormBuilder,
        private storageService: StorageService) {

            this.logindata = this.formBuilder.group({
              'name': ['', [Validators.required, nameValidator]],
              'password': ['', [Validators.required, passwordValidator]],
            });

  }


  login(){
  	if(!this.logindata.controls['name'].valid){


 		//使用Toast控件进行提示
 		let toast = this.toastCtrl.create({
 			message: "您输入的用户名格式不正确!",
 			duration: 2000,
 			position: 'bottom'
 			});
 		toast.present();

  }else if(!this.logindata.controls['password'].valid){
    let toast = this.toastCtrl.create({
      message: "您输入的密码格式不正确!",
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }else{
    // console.log(this.logindata.value);

  		//alert(this.user.username);
  	   //console.log(this.user.password);
   	    let loading = this.loadingCtrl.create({
        	content: 'Please wait...',
          spinner: "dots",
          duration: 3000
        });

    	loading.present();
      this.service.post("http://api.shrik3.com/api/user/auth", this.logindata.value)
        .subscribe(data => {
          console.log(data);
          this.storageService.write('access_token', data.access_token);
          // this.storageService.write('Logined', 'true');
          localStorage.setItem("Logined", "true");

          setTimeout(() => {
           loading.dismiss();
           let toast = this.toastCtrl.create({
             message: "登陆成功!",
             duration: 2000,
             position: 'bottom'
           });
           toast.present();
           this.navCtrl.pop();
          }, 1000);


        }, error => {
          // console.log(error.json().message);
          loading.dismiss();
          let toast = this.toastCtrl.create({
            message: '登陆失败，' + error.json().message,
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
        });



    //这里模拟了登陆，如果密码为123456，登陆成功，进行相关的保存动作
        // if(this.user.password == "123456"){
        //     var storage = window.localStorage;
        //     storage["username"] = this.user.username;
        //     storage["Logined"] = "true";
        //     setTimeout(() => {
        //      loading.dismiss();
        //      this.navCtrl.pop();
        //     }, 1000);
        //
        //   }
        // else{
        //     setTimeout(() => {
        //      loading.dismiss();
        //     }, 1000);
        //
        //     let toast = this.toastCtrl.create({
        //       message: "密码错误!",
        //       duration: 2000,
        //       position: 'bottom'
        //      });
        //     toast.present();
        //
        // }

   }

}

  //打开注册窗口
  openRegisterPage(){
  	let registerModal = this.modalCtrl.create(Register);
  	registerModal.present();
  }

  //用户上传头像图片
  // uploadImage(){
  //   var opt = { maxImagesCount:1, width:100, height:100, quality:50 };
  //   ImagePicker.getPictures(opt).then((results)=>{
  //     for(var i=0;i<results.length;i++){
  //       this.user.headface = results[i];
  //     }
  //     });
  // }

}
