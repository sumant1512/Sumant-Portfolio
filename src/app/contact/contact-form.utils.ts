import { FormControl, FormGroup, Validators } from "@angular/forms";

export function contactForm() {
  return new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    mobileNumber: new FormControl(""),
    message: new FormControl("", [Validators.required]),
  });
}
