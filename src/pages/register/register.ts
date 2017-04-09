import { Component } from '@angular/core';
import { ViewController, LoadingController, ToastController, NavController} from 'ionic-angular';
import {ServiceTask } from '../../providers/service-task';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {TabsPage } from '../tabs/tabs';
import {emailValidator, nameValidator, passwordValidator} from '../../providers/validator';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [ServiceTask]
})


export class Register {

  private signupdata: FormGroup;

  constructor(public viewCtrl: ViewController,
    public service: ServiceTask,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    public navCtrl: NavController) {


    this.signupdata = this.formBuilder.group({
      'name': ['', [Validators.required, nameValidator]],
      'password': ['', [Validators.required, passwordValidator]],
      'email': ['', [Validators.required, emailValidator]]
    });

  }



  dismiss() {
    this.viewCtrl.dismiss()

  }





  signup(data, event) {

    if (!this.signupdata.controls['name'].valid) {
      //使用Toast控件进行提示
      let toast = this.toastCtrl.create({
        message: "用户名应为3-16位字符的大小写字母,数字,或下划线的组合!",
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } else if (!this.signupdata.controls['password'].valid) {
      let toast = this.toastCtrl.create({
        message: "密码应为6-20位字符的大小写字母,数字,或符号的组合!",
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } else if (!this.signupdata.controls['email'].valid) {
      let toast = this.toastCtrl.create({
        message: "邮箱格式有误!",
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } else {
      // console.log(this.signupdata.value);
      let loading = this.loadingCtrl.create({
        content: '正在注册...',
        spinner: "dots",
      });
      loading.present();

      this.service.post("http://api.shrik3.com/api/user/register", this.signupdata.value)
        .subscribe(data => {
          // console.log(data);


          setTimeout(() => {
           loading.dismiss();
           let toast = this.toastCtrl.create({
             message: "注册成功!",
             duration: 2000,
             position: 'bottom'
           });
           toast.present();
           this.navCtrl.push(TabsPage);
          }, 1000);

        }, error => {
          // console.log(error.json().message);
          loading.dismiss();
          let toast = this.toastCtrl.create({
            message: '注册失败，' + error.json().message,
            duration: 2000,
            position: 'bottom'
          });
          toast.present();
        });

    }
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // let options = new RequestOptions({ headers: headers });
    //
    //
    //
    // this.http.post("http://api.shrik3.com/api/user/register",this.signupdata.value,options).map(res=>res.json())
    //   .subscribe(
    //     data => {
    //
    //     console.log(data);
    //    },
    //    error => {
    //     console.log(error.json());
    //   });
  }

}
