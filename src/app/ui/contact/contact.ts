import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly formspreeUrl = 'https://formspree.io/f/meaevoyd';

  isSubmitting = false;

  isSubmitted = false;

  submitError = '';
  private fb = inject(FormBuilder);

  submitted = false;

  contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      return;
    }

    this.isSubmitting = true;

    this.submitError = '';

    this.http
      .post(
        'https://formspree.io/f/meaevoyd',

        this.contactForm.getRawValue(),

        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .subscribe({
        next: () => {
          this.isSubmitting = false;

          // THIS is what triggers @else

          this.submitted = true;

          this.contactForm.reset();
        },

        error: (error) => {
          console.error('Formspree error:', error);

          this.isSubmitting = false;

          this.submitError = 'Something went wrong. Please try again.';
        },
      });
  }
}
