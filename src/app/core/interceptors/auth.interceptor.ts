import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Minimal HttpInterceptorFn for the standalone provideHttpClient API.
 * This adds an Authorization header when a token is present (mocked here).
 */
export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  const token = 'demo-token'; // replace with real token logic
  const cloned = req.clone({ setHeaders: { Authorization: token ? `Bearer ${token}` : '' } });
  return next.handle(cloned);
}
