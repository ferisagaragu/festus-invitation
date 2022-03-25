import { HttpHeaders } from '@angular/common/http';

export const headers = new HttpHeaders().set(
  'Authorization',
  `Bearer ${localStorage.getItem('token')}`
);
