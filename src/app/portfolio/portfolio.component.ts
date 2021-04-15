import { Component, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";
import { WORKLIST } from "./portfolio.constant";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  workList = WORKLIST;

  constructor() {}

  ngOnInit(): void {
    isInViewport(".animate-to-top");
  }
}
