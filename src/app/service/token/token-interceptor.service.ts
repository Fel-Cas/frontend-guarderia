import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service:AuthService) { }
  intercept(req,next){
    const token =req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.service.getToken()}`
      }
    });
    return next.handle(token);
  }

}
