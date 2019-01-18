import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: ToastrService,) {
   }
  
  
  showSuccess(content:string) {
    this.toastrService.success('', content,{timeOut: 2000});
  }

  showError(content:string) {
    this.toastrService.error('', content, {timeOut: 2500});
  }

  showWarning(content:string) {
    this.toastrService.warning('', content, {timeOut: 2500});
  }

  
  
}
