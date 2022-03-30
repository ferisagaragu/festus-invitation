import { HttpHeaders } from '@angular/common/http';

export const getHeaders = () => new HttpHeaders().set(
  'Authorization',
  `Bearer ${localStorage.getItem('token')}`
);
