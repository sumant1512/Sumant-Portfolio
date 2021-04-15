import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Chart from "chart.js";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements AfterViewInit {
  htmlCanvas: any;
  cssCanvas: any;
  bootstrapCanvas: any;
  tachyonsCanvas: any;
  jsCanvas: any;
  tsCanvas: any;
  ramdaCanvas: any;
  angularCanvas: any;
  htmlCtx: any;
  cssCtx: any;
  bootstrapCtx: any;
  tachyonsCtx: any;
  jsCtx: any;
  tsCtx: any;
  ramdaCtx: any;
  angularCtx: any;
  fontStyle = {
    fontColor: "white",
    fontSize: 14,
    fontStyle: "bold",
  };
  ngAfterViewInit() {
    isInViewport(".animate-to-top");
    this.htmlCanvasCode();
    this.cssCanvasCode();
    this.bootstrapCanvasCode();
    this.tachyonsCanvasCode();
    this.jsCanvasCode();
    this.tsCanvasCode();
    this.ramdaCanvasCode();
    this.angularCanvasCode();
  }

  htmlCanvasCode() {
    this.htmlCanvas = document.getElementById("html");
    this.htmlCtx = this.htmlCanvas.getContext("2d");
    let html = new Chart(this.htmlCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [85, 15],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "HTML",
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

  cssCanvasCode() {
    this.cssCanvas = document.getElementById("css");
    this.cssCtx = this.cssCanvas.getContext("2d");
    let css = new Chart(this.cssCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "CSS",
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

  bootstrapCanvasCode() {
    this.bootstrapCanvas = document.getElementById("bootstrap");
    this.bootstrapCtx = this.bootstrapCanvas.getContext("2d");
    let bootstrap = new Chart(this.bootstrapCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [95, 5],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Bootstrap",
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

  tachyonsCanvasCode() {
    this.tachyonsCanvas = document.getElementById("tachyons");
    this.tachyonsCtx = this.tachyonsCanvas.getContext("2d");
    let tachyons = new Chart(this.tachyonsCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Tachyons",
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

  jsCanvasCode() {
    this.jsCanvas = document.getElementById("js");
    this.jsCtx = this.jsCanvas.getContext("2d");
    let js = new Chart(this.jsCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "JavaScript",
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

  tsCanvasCode() {
    this.tsCanvas = document.getElementById("ts");
    this.tsCtx = this.tsCanvas.getContext("2d");
    let ts = new Chart(this.tsCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "TypeScript",
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

  ramdaCanvasCode() {
    this.ramdaCanvas = document.getElementById("ramda");
    this.ramdaCtx = this.ramdaCanvas.getContext("2d");
    let ramda = new Chart(this.ramdaCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Ramda",
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

  angularCanvasCode() {
    this.angularCanvas = document.getElementById("angular");
    this.angularCtx = this.angularCanvas.getContext("2d");
    let angular = new Chart(this.angularCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "In Progress"],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: ["green", "red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Angular 2+",
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
