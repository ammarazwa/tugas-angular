import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  isExpanded = true;

  @ViewChild('bodySection') bodySection!: ElementRef;

  // Named Slots
  @ContentChild('header') header!: ElementRef;
  @ContentChild('body') body!: ElementRef;
  @ContentChild('footer') footer!: ElementRef;

  toggle() {
    this.isExpanded = !this.isExpanded;
    console.log('Body section:', this.bodySection?.nativeElement);
  }
}
