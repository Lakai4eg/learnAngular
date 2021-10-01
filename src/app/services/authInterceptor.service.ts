import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers: req.headers.append('auth', 'val')})
    req = req.clone({headers: req.headers.append('anotherCustomHeader', 'val')})
    console.log('Перехвачен', req)
    return next.handle(req)
  }

}
