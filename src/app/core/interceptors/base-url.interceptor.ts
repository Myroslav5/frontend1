import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiBaseUrl = 'http://localhost:3000';

  const newReq = req.clone({
    url: `${apiBaseUrl}/${req.url}`
  });

  return next(newReq);
};