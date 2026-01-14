import { CanMatchFn } from '@angular/router';

export const userCanMatch: CanMatchFn = (_route, segments) => {
  const firstSegment = segments[0]?.path;
  return firstSegment === 'login' || firstSegment === 'register';
};