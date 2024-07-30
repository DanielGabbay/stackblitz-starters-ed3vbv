import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-json-editor',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './json-editor.component.html',
    styleUrl: './json-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonEditorComponent { }
