import { GenericModalService } from './generic-modal.service';
import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
    private element: any;

  constructor(private modalService: GenericModalService,
              private el: ElementRef) {
                this.element = el.nativeElement;
              }

  ngOnInit() {
    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'generic-modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('app-generic-modal-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('app-generic-modal-open');
  }
}
