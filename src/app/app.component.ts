import { Component } from "@angular/core";
import { ToggleStatusEmit } from "./header/header.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  status: boolean = false;

  // This function is for toggel of header
  toggleforHeader(selectedPage: ToggleStatusEmit) {
    this.status = selectedPage.toggleStatus;
    if (selectedPage.selectedPage) {
      setTimeout(() => {
        document
          .getElementById(selectedPage.selectedPage)
          .scrollIntoView({ behavior: "smooth" });
      }, 1);
    }
  }
}
