import {
  Directive,
  Input,
  HostListener,
  OnInit,
  ComponentRef,
  ElementRef
} from "@angular/core";
import {
  OverlayModule,
  Overlay,
  OverlayRef,
  OverlayPositionBuilder
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ToolTipComponent } from "./tool-tip/tool-tip.component";

@Directive({
  selector: "[appToolTip]"
})
export class ToolTipDirective implements OnInit {
  private overlayRef: OverlayRef;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom"
        }
      ]);

    // Connect position strategy
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @Input("appToolTip") text = "";

  @HostListener("mouseenter")
  show() {
    const tooltipPortal = new ComponentPortal(ToolTipComponent);
    const tooltipRef: ComponentRef<ToolTipComponent> = this.overlayRef.attach(
      tooltipPortal
    );
    tooltipRef.instance.text = this.text;
  }

  @HostListener("mouseout")
  hide() {
    this.overlayRef.detach();
  }
}
