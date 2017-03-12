import { Component, OnInit, NgZone } from "@angular/core";
import {Observable} from "rxjs/observable";
import {Observer} from "rxjs/observer";
import {IRecipeEvent} from "../../shared";

interface IMessageEvent<T> {
  type: string;
  data: T;
  timestamp: number;
  origin: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Awaiting events...";
  zone: NgZone;
  recipeEvents: IRecipeEvent[];

  constructor() {
    this.zone = new NgZone({enableLongStackTrace: false});
  }

  ngOnInit() {
    const recipeObservable: Observable<IRecipeEvent> = Observable.create((observer: Observer<IRecipeEvent>) => {
      const eventSource = new EventSource("/api/display/connect");
      eventSource.onopen = () => {
        console.log("EventSource open");
      };
      eventSource.onmessage = (message: IMessageEvent<any>) => {
        console.log("Received message:", message);
      };
      eventSource.addEventListener("recipe", (message: IMessageEvent<string>) => {
        const recipe: IRecipeEvent = JSON.parse(message.data);
        console.log("Received recipe:", recipe);
        observer.next(recipe);
      });
      eventSource.onerror = (error) => observer.error(error);
      return () => {
        eventSource.close();
      };
    });

    recipeObservable.subscribe({
      next: (recipe) => {
        this.zone.run(() => {
          this.recipeEvents = [];
          this.recipeEvents.push(recipe);
          this.title = recipe.title;
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
