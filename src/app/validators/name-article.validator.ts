import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NameArticleValidator(control: AbstractControl): ValidationErrors | null {

  if (!control.value) return null;

  const forbiddenNames = ['prueba', 'test', 'mock', 'fake'];

  return forbiddenNames.includes(control.value.toLowerCase())
    ? { forbiddenName: true }
    : null;
}
