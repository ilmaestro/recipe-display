import { Component, OnInit, NgZone } from "@angular/core";
import {Observable} from "rxjs/observable";
import {Observer} from "rxjs/observer";

interface IMessageEvent<T> {
  type: string;
  data: T;
  timestamp: number;
  origin: string;
}

interface IRecipeEvent {
    url: string;
    ingredientsBody: string;
    directionsBody: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app works!";
  someData: IRecipeEvent[] = [];
  zone: NgZone;

  constructor() {
    this.zone = new NgZone({enableLongStackTrace: false});
  }

  ngOnInit() {
    const observable: Observable<IRecipeEvent> = Observable.create((observer: Observer<IRecipeEvent>) => {
      const eventSource = new EventSource("/api/eventsource");
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

    observable.subscribe({
      next: (data) => {
        this.zone.run(() => {
          this.someData.push(data);
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
