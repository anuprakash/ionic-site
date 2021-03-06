import { GestureDelegate } from '../gestures/gesture-controller';
import { DomController } from '../util/dom-controller';
/**
 * @private
 */
export interface PanGestureConfig {
    threshold?: number;
    maxAngle?: number;
    direction?: 'x' | 'y';
    gesture?: GestureDelegate;
    domController?: DomController;
    zone?: boolean;
    capture?: boolean;
    passive?: boolean;
}
/**
 * @private
 */
export declare class PanGesture {
    private element;
    private debouncer;
    private events;
    private pointerEvents;
    private detector;
    protected started: boolean;
    private captured;
    isListening: boolean;
    protected gestute: GestureDelegate;
    protected direction: string;
    private eventsConfig;
    constructor(element: HTMLElement, opts?: PanGestureConfig);
    listen(): void;
    unlisten(): void;
    destroy(): void;
    pointerDown(ev: any): boolean;
    pointerMove(ev: any): void;
    pointerUp(ev: any): void;
    tryToCapture(ev: any): boolean;
    abort(ev: any): void;
    getNativeElement(): HTMLElement;
    canStart(ev: any): boolean;
    onDragStart(ev: any): void;
    onDragMove(ev: any): void;
    onDragEnd(ev: any): void;
    notCaptured(ev: any): void;
}
