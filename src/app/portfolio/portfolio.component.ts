import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  workList = [
    {
      bannerImage: "../../assets/banner_1.jpeg",
      navigationUrl: "https://bit-money.netlify.app/",
      developedLanguage: "Angular 8",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
