import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-json-editor',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>json-editor works!</p>`,
    styleUrl: './json-editor.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonEditorComponent { }
