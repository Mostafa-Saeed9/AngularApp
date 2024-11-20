import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  const router = inject(Router)
  console.log('authService',authService.isUserLogged)
  // if(authService.isUserLogged){
  //   return true
  // }
  // else{
  // alert('You are not authorized to access this page.')
  // router.navigate(['/login'])
  //   return false
  // }
  return authService.isUserLogged
  ? true
  : (alert('You are not authorized to access this page.'), router.navigate(['/Login']), false);
};

