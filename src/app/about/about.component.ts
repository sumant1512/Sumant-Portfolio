import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ToggleStatusEmit } from "../header/header.type";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @Output() toggleStatus = new EventEmitter<ToggleStatusEmit>();
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
}
