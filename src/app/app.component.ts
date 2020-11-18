import { Component } from "@angular/core";
import { ToggleStatusEmit } from "./header/header.type";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sumantPortfolio";
  status: boolean = false;

  // This function is for toggel of header
  toggleforHeader(selectedPage: ToggleStatusEmit) {
    this.status = selectedPage.toggleStatus;
    console.log(selectedPage);
    if (selectedPage.selectedPage) {
      setTimeout(() => {
        document
          .getElementById(selectedPage.selectedPage)
          .scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }, 1);
    }
  }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
}
