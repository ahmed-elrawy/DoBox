import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map,skip, takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[appResizable]', // Attribute selector
})
export class ResizableDirective implements OnInit {
    @Input() resizableGrabWidth = 8;
    @Input() resizableMinWidth = 10;
    @Input() currentSize = 0
    @Output() updatedSize = new EventEmitter<number>();

    dragging = false;

    constructor(private el: ElementRef) {
        const self = this;

        const EventListenerMode = { capture: true };

        function preventGlobalMouseEvents() {
            (document.body.style as any)['pointer-events'] = 'none';
        }

        function restoreGlobalMouseEvents() {
            (document.body.style as any)['pointer-events'] = 'auto';
        }

        const newWidth = (wid: number) => {
            // let width= el.nativeElement.style.width.slice(0, -1);
            const newWidth = Math.max(this.resizableMinWidth, wid);
            el.nativeElement.style.width = newWidth + 'px';
            this.currentSize =newWidth
            // this.updatedSize.emit(newWidth);

            // setTimeout(() => {
            // }, 500)


        };

        const mouseMoveG = (evt: any) => {
            if (!this.dragging) {
                return;
            }

            newWidth(evt.clientX - el.nativeElement.offsetLeft);
            evt.stopPropagation();
        };

        const dragMoveG = (evt: any) => {
            if (!this.dragging) {
                return;
            }
            const newWidth =
                Math.max(
                    this.resizableMinWidth,
                    evt.clientX - el.nativeElement.offsetLeft
                ) + 'px';
            el.nativeElement.style.width =
                evt.clientX - el.nativeElement.offsetLeft + 'px';
            evt.stopPropagation();
        };

        const mouseUpG = (evt: any) => {
            console.log('mouseUpG');
            this.updatedSize.emit(this.currentSize);

            if (!this.dragging) {
                return;
            }
            restoreGlobalMouseEvents();
            this.dragging = false;
            evt.stopPropagation();

        };

        const mouseDown = (evt: any) => {
            if (this.inDragRegion(evt)) {
                this.dragging = true;
                preventGlobalMouseEvents();
                evt.stopPropagation();
            }
        };

        const mouseMove = (evt: any) => {
            if (this.inDragRegion(evt) || this.dragging) {
                el.nativeElement.style.cursor = 'col-resize';
            } else {
                el.nativeElement.style.cursor = 'default';
            }
        };

        document.addEventListener('mousemove', mouseMoveG, true);
        document.addEventListener('mouseup', mouseUpG, true);
        el.nativeElement.addEventListener('mousedown', mouseDown, true);
        el.nativeElement.addEventListener('mousemove', mouseMove, true);
        // fromEvent(document, 'mousemove').pipe(
        //     // skip(120),
        //     // debounceTime(100),
        //     // takeUntil(10)
        // ) .subscribe((ev) => {
        //     mouseMoveG(ev)

        //     // console.log('mousemove:',ev);
        //   });
        //   fromEvent(document, 'mouseup').pipe(
        //     // debounceTime(1000),
        //     // skip(10),

        //     map((e) => { mouseUpG(e)})
        // ) .subscribe((scrollDirection) => {
        //     // console.log('mouseup:',scrollDirection);
        //   });

        //   fromEvent(el.nativeElement, 'mousedown').pipe(
        //     // debounceTime(1000),
        //     // skip(10),

        //     map((e) => { mouseDown(e)})
        // ) .subscribe((scrollDirection) => {
        //     // console.log('mousedown:',scrollDirection);
        //   });

        //   fromEvent(el.nativeElement, 'mousemove').pipe(
        //     // debounceTime(100000),
        //     // skip(100000),
        //     map((e) => { mouseMove(e)})
        // ) .subscribe((scrollDirection) => {
        //     // console.log('mousemove:',scrollDirection);
        //   });




    }

    ngOnInit(): void {
        this.el.nativeElement.style['border-right'] =
            this.resizableGrabWidth + 'px solid darkgrey';


    }

    inDragRegion(evt: any) {
        return (
            this.el.nativeElement.clientWidth -
            evt.clientX +
            this.el.nativeElement.offsetLeft <
            this.resizableGrabWidth
        );
    }
}
