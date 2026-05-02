import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { TaskInput } from "./components/task-input/task-input";
import { TaskList } from "./components/task-list/task-list";
import { Footer } from "./components/footer/footer";
import { Carousel } from "./components/carousel/carousel";
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, TaskInput, TaskList, Footer, Carousel]
})
export class App {
}
