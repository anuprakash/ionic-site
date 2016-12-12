/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from 'ionic-angular/config/config';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from 'ionic-angular/components/slides/slides';
import * as import18 from '@angular/core/src/security';
import * as import19 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from 'ionic-angular/navigation/nav-controller-base';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from '@angular/core/src/linker/component_factory_resolver';
import * as import26 from 'ionic-angular/gestures/gesture-controller';
import * as import27 from 'ionic-angular/transitions/transition-controller';
import * as import28 from 'ionic-angular/navigation/deep-linker';
import * as import29 from 'ionic-angular/components/nav/nav';
export class Wrapper_ApiDemoPage {
  context:import0.ApiDemoPage;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.ApiDemoPage();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
export class Wrapper_ApiDemoApp {
  context:import0.ApiDemoApp;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.ApiDemoApp();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_ApiDemoPage_Host:import2.RenderComponentType = (null as any);
class _View_ApiDemoPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ApiDemoPage_0_4:Wrapper_ApiDemoPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage_Host0,renderType_ApiDemoPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoPage_0_4 = new Wrapper_ApiDemoPage();
    this._appEl_0.initComponent(this._ApiDemoPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ApiDemoPage) && (0 === requestNodeIndex))) { return this._ApiDemoPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApiDemoPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoPage_Host === (null as any))) { (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoPageNgFactory:import9.ComponentFactory<import0.ApiDemoPage> = new import9.ComponentFactory<import0.ApiDemoPage>('ng-component',viewFactory_ApiDemoPage_Host0,import0.ApiDemoPage);
const styles_ApiDemoPage:any[] = ([] as any[]);
var renderType_ApiDemoPage:import2.RenderComponentType = (null as any);
class _View_ApiDemoPage0 extends import1.AppView<import0.ApiDemoPage> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Slides_0_4:import10.Wrapper_Slides;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import11.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  _arr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage0,renderType_ApiDemoPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-slides',(null as any));
    this.renderer.setElementAttribute(this._el_0,'loop','true');
    this.renderer.setElementAttribute(this._el_0,'style','background-color: black');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import10.viewFactory_Slides0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Slides_0_4 = new import10.Wrapper_Slides(this.parentInjector.get(import12.Config),new import13.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Slides_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_2 = new import3.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2,viewFactory_ApiDemoPage1);
    this._NgFor_2_6 = new import11.Wrapper_NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_3 = this.renderer.createText((null as any),'\n',(null as any));
      compView_0.create(this._Slides_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._appEl_2,
        this._text_3
      ]
    )],(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._arr_0 = import4.pureProxy5((p0:any,p1:any,p2:any,p3:any,p4:any):any[] => {
      return [
        p0,
        p1,
        p2,
        p3,
        p4
      ]
      ;
    });
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import16.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import17.Slides) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Slides_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Slides_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    const currVal_0:any = this._arr_0(1,2,3,4,5);
    this._NgFor_2_6.check_ngForOf(currVal_0,throwOnChange,false);
    this._NgFor_2_6.detectChangesInternal(this,this._anchor_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_ApiDemoPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ApiDemoPage> {
  if ((renderType_ApiDemoPage === (null as any))) { (renderType_ApiDemoPage = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ApiDemoPage,{})); }
  return new _View_ApiDemoPage0(viewUtils,parentInjector,declarationEl);
}
class _View_ApiDemoPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Slide_0_4:import10.Wrapper_Slide;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage1,renderType_ApiDemoPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-slide',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import10.viewFactory_Slide0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Slide_0_4 = new import10.Wrapper_Slide(new import13.ElementRef(this._el_0),(<_View_ApiDemoPage0>this.parent)._Slides_0_4.context);
    this._appEl_0.initComponent(this._Slide_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'img',(null as any));
    this._text_3 = this.renderer.createText((null as any),'\n  ',(null as any));
      compView_0.create(this._Slide_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_3
      ]
    )],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.Slide) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Slide_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Slide_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'./slide',this.context.$implicit,'.jpeg');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Slide_0_4.context.ngOnDestroy();
  }
}
function viewFactory_ApiDemoPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_ApiDemoPage1(viewUtils,parentInjector,declarationEl);
}
var renderType_ApiDemoApp_Host:import2.RenderComponentType = (null as any);
class _View_ApiDemoApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ApiDemoApp_0_4:Wrapper_ApiDemoApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoApp_Host0,renderType_ApiDemoApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoApp_0_4 = new Wrapper_ApiDemoApp();
    this._appEl_0.initComponent(this._ApiDemoApp_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoApp_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ApiDemoApp) && (0 === requestNodeIndex))) { return this._ApiDemoApp_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApiDemoApp_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoApp_Host === (null as any))) { (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoAppNgFactory:import9.ComponentFactory<import0.ApiDemoApp> = new import9.ComponentFactory<import0.ApiDemoApp>('ng-component',viewFactory_ApiDemoApp_Host0,import0.ApiDemoApp);
const styles_ApiDemoApp:any[] = ([] as any[]);
var renderType_ApiDemoApp:import2.RenderComponentType = (null as any);
class _View_ApiDemoApp0 extends import1.AppView<import0.ApiDemoApp> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Nav_0_4:import19.Wrapper_Nav;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoApp0,renderType_ApiDemoApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import19.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import19.Wrapper_Nav(this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import21.NavControllerBase,(null as any)),this.parentInjector.get(import22.App),this.parentInjector.get(import12.Config),this.parentInjector.get(import23.Keyboard),new import13.ElementRef(this._el_0),this.parentInjector.get(import24.NgZone),this.renderer,this.parentInjector.get(import25.ComponentFactoryResolver),this.parentInjector.get(import26.GestureController),this.parentInjector.get(import27.TransitionController),this.parentInjector.get(import28.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Nav_0_4.context,([] as any[]),(null as any));
    this.init(([] as any[]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.root;
    this._Nav_0_4.check_root(currVal_0,throwOnChange,false);
    this._Nav_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.context.ngAfterViewInit(); } }
  }
}
export function viewFactory_ApiDemoApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ApiDemoApp> {
  if ((renderType_ApiDemoApp === (null as any))) { (renderType_ApiDemoApp = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ApiDemoApp,{})); }
  return new _View_ApiDemoApp0(viewUtils,parentInjector,declarationEl);
}