import { Component, OnInit } from "@angular/core";
import * as Chart from "chart.js";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  uiCanvas: any;
  uiCtx: any;
  webCanvas: any;
  webCtx: any;
  fullStackCanvas: any;
  fullStackCtx: any;
  fontStyle = {
    fontColor: "white",
    fontSize: 14,
    fontStyle: "bold",
  };
  constructor() {}

  ngOnInit(): void {
    this.uiCanvasCode();
    this.webCanvasCode();
    this.fullStackCanvasCode();
  }

  uiCanvasCode() {
    this.uiCanvas = document.getElementById("ui");
    this.uiCtx = this.uiCanvas.getContext("2d");
    let ui = new Chart(this.uiCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [100, 0],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "UI Development",
          fontColor: "white",
          fontSize: 20,
        },
        legend: {
          labels: this.fontStyle,
        },
        responsive: false,
        display: true,
      },
    });
  }

  webCanvasCode() {
    this.webCanvas = document.getElementById("web");
    this.webCtx = this.webCanvas.getContext("2d");
    let web = new Chart(this.webCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [100, 0],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Web Development",
          fontColor: "white",
          fontSize: 20,
        },
        legend: {
          labels: this.fontStyle,
        },
        responsive: false,
        display: true,
      },
    });
  }

  fullStackCanvasCode() {
    this.fullStackCanvas = document.getElementById("fullStack");
    this.fullStackCtx = this.fullStackCanvas.getContext("2d");
    let fullStack = new Chart(this.fullStackCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [100, 0],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Full Stack Development",
          fontColor: "white",
          fontSize: 20,
        },
        legend: {
          labels: this.fontStyle,
        },
        responsive: false,
        display: true,
      },
    });
  }
}
