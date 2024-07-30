import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { JsonEditorComponent } from "./components/json-editor/json-editor.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `<app-json-editor></app-json-editor>`,
  imports: [JsonEditorComponent],
})
export class App {
  name = "Angular";
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()],
});
