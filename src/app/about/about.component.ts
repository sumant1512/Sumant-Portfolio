import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ToggleStatusEmit } from "../header/header.type";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @Output() toggleStatus = new EventEmitter<ToggleStatusEmit>();
  pending: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  // this function is for scrollPage of pages
  scrollPage(selectedPage: string) {
    const toggleDataEmit = {
      toggleStatus: false,
      selectedPage: selectedPage,
    };
    this.toggleStatus.emit(toggleDataEmit); // this emits the toggle status to parent component so that it can open or close the scrollPage accordingly.
  }

  downloadResume() {
    var path = "../../assets/CV_Sumant_Mishra.pdf";
    var save = document.createElement("a");
    save.href = path;
    save.download = "RESUME_SUMANT_MISHRA";
    var evt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    save.dispatchEvent(evt);
  }
}
