import { Injectable } from '@angular/core';
import {FormBuilder,FormControl,Validators,AbstractControl } from '@angular/forms';


//邮箱正则
export function emailValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)) {
                return { invalidEmail: true };
        }
}
//用户名正则 3-16位 大小写字母 下划线 数字的组合
export function nameValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^[a-zA-Z0-9_]{3,16}$/ )) {
                return { invalidNickname: true };
        }
}
//密码正则 6-20 位，字母、数字、字符
export function passwordValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}':;',] ){6,20}$/ )) {
                return { invalidNickname: true };
        }
}
