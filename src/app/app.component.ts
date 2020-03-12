import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSort } from "@angular/material/sort";
import moment from "moment";
import { of, interval } from "rxjs";
import { delay } from "rxjs/operators";
import {
  trigger,
  animate,
  transition,
  style,
  state
} from "@angular/animations";

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
//   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
//   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
//   { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
//   { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
//   { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
//   { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
//   { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
//   { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
//   { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na" },
//   { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg" },
//   { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al" },
//   { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si" },
//   { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" },
//   { position: 16, name: "Sulfur", weight: 32.065, symbol: "S" },
//   { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl" },
//   { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" },
//   { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" },
//   { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca" }
// ];

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger("slideInOutAnimation", [
      // end state styles for route container (host)
      state(
        "*",
        style({
          // the view covers the whole screen with a semi tranparent background
          // position: "fixed",
          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          // backgroundColor: "rgba(0, 0, 0, 0.8)"
        })
      ),

      // route 'enter' transition
      transition(":enter", [
        // styles at start of transition
        style({
          // start with the content positioned off the right of the screen,
          // -400% is required instead of -100% because the negative position adds to the width of the element
          right: "-400%",

          // start with background opacity set to 0 (invisible)
          // backgroundColor: "rgba(0, 0, 0, 0)"
        }),

        // animation and styles at end of transition
        animate(
          ".5s ease-in-out",
          style({
            // transition the right position to 0 which slides the content into view
            right: 0,

            // transition the background opacity to 0.8 to fade it in
            // backgroundColor: "rgba(0, 0, 0, 0.8)"
          })
        )
      ]),

      // route 'leave' transition
      transition(":leave", [
        // animation and styles at end of transition
        animate(
          ".5s ease-in-out",
          style({
            // transition the right position to -400% which slides the content out of view
            right: "-400%",

            // transition the background opacity to 0 to fade it out
            backgroundColor: "rgba(0, 0, 0, 0)"
          })
        )
      ])
    ])
  ]   
})
export class AppComponent {
  // name = "Angular";
  // isOpen = false;
  date = new Date();
  utcDate;
  localDate;
  mark$;
  // displayedColumns: string[] = [
  //   "position",
  //   "name",
  //   "weight",
  //   "symbol",
  //   "actionsColumn"
  // ];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.utcDate = moment.utc(this.date).format("MM-DD-YYYY, HH:mm");
    this.localDate = moment(this.date).format("MM-DD-YYYY, HH:mm");

    setInterval(() => {
      var ranNums = shuffle(["RADIOLOGY", "ED"]);
      this.mark$ = ranNums.next().value;
    }, 3000);

    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // myGroup = new FormGroup({
  //   myControl: new FormControl("")
  // });

  // options: string[] = [
  //   "One",
  //   "Two",
  //   "Three",
  //   "Four",
  //   "position",
  //   "name",
  //   "weight",
  //   "symbol",
  //   "One",
  //   "Two",
  //   "Three",
  //   "Four",
  //   "position",
  //   "name",
  //   "weight",
  //   "symbol"
  // ];

  // showTabIndex(event) {
  //   this.isOpen = true;
  //   console.log(event);
  // }
}

function* shuffle(array) {
  var i = array.length;

  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
}
