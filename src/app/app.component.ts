import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    selection: any;
    suggestedItems: Observable<any[]>;
    suggestionSubject: Subject<string>;
    selections: string;

  public onSelectionChange(selection: any[]): void {
    this.selections = selection.map(x => x.label).join(',');
  }
}
