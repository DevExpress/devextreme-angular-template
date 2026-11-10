import { Output, Injectable, EventEmitter, WritableSignal, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class ScreenService {
  @Output() changed = new EventEmitter();

  private readonly _sizes: WritableSignal<Record<string, boolean>>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this._sizes = signal(this.calculateSizes());

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe(() => {
        this._sizes.set(this.calculateSizes());
        this.changed.next(true);
      });
  }

  private isLargeScreen() {
    const isLarge = this.breakpointObserver.isMatched(Breakpoints.Large);
    const isXLarge = this.breakpointObserver.isMatched(Breakpoints.XLarge);

    return isLarge || isXLarge;
  }

  private calculateSizes(): Record<string, boolean> {
    return {
      'screen-x-small': this.breakpointObserver.isMatched(Breakpoints.XSmall),
      'screen-small': this.breakpointObserver.isMatched(Breakpoints.Small),
      'screen-medium': this.breakpointObserver.isMatched(Breakpoints.Medium),
      'screen-large': this.isLargeScreen(),
    };
  }

  public get sizes(): Record<string, boolean> {
    return this._sizes();
  }
}
