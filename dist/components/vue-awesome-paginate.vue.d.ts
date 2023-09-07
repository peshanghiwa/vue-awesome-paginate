declare const _sfc_main: import("vue").DefineComponent<{
    totalItems: {
        type: NumberConstructor;
        required: true;
    };
    itemsPerPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => true;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
        validator: (value: unknown) => true;
    };
    maxPagesShown: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => true;
    };
    dir: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => true;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => true;
    };
    onClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    locale: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => true;
    };
    prevButtonContent: {
        type: StringConstructor;
        default: string;
    };
    nextButtonContent: {
        type: StringConstructor;
        default: string;
    };
    hidePrevNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidePrevNextWhenEnds: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBreakpointButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableBreakpointButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    startingBreakpointContent: {
        type: StringConstructor;
        default: string;
    };
    endingBreakpointButtonContent: {
        type: StringConstructor;
        default: string;
    };
    showJumpButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    linkUrl: {
        type: StringConstructor;
        default: string;
    };
    pureLinkUrl: {
        type: StringConstructor;
        default: string;
    };
    backwardJumpButtonContent: {
        type: StringConstructor;
        default: string;
    };
    forwardJumpButtonContent: {
        type: StringConstructor;
        default: string;
    };
    disablePagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    showEndingButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstPageContent: {
        type: StringConstructor;
        default: string;
    };
    lastPageContent: {
        type: StringConstructor;
        default: string;
    };
    backButtonClass: {
        type: StringConstructor;
        default: string;
    };
    nextButtonClass: {
        type: StringConstructor;
        default: string;
    };
    firstButtonClass: {
        type: StringConstructor;
        default: string;
    };
    lastButtonClass: {
        type: StringConstructor;
        default: string;
    };
    numberButtonsClass: {
        type: StringConstructor;
        default: string;
    };
    startingBreakpointButtonClass: {
        type: StringConstructor;
        default: string;
    };
    endingBreakPointButtonClass: {
        type: StringConstructor;
        default: string;
    };
    firstPageButtonClass: {
        type: StringConstructor;
        default: string;
    };
    lastPageButtonClass: {
        type: StringConstructor;
        default: string;
    };
    paginateButtonsClass: {
        type: StringConstructor;
        default: string;
    };
    disabledPaginateButtonsClass: {
        type: StringConstructor;
        default: string;
    };
    activePageClass: {
        type: StringConstructor;
        default: string;
    };
    paginationContainerClass: {
        type: StringConstructor;
        default: string;
    };
    disabledBreakPointButtonClass: {
        type: StringConstructor;
        default: string;
    };
    backwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
    forwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledBackwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledBackButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledFirstButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledLastButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledNextButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledForwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    totalItems: {
        type: NumberConstructor;
        required: true;
    };
    itemsPerPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => true;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
        validator: (value: unknown) => true;
    };
    maxPagesShown: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => true;
    };
    dir: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => true;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => true;
    };
    onClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    locale: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => true;
    };
    prevButtonContent: {
        type: StringConstructor;
        default: string;
    };
    nextButtonContent: {
        type: StringConstructor;
        default: string;
    };
    hidePrevNext: {
        type: BooleanConstructor;
        default: boolean;
    };
    hidePrevNextWhenEnds: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBreakpointButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableBreakpointButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    startingBreakpointContent: {
        type: StringConstructor;
        default: string;
    };
    endingBreakpointButtonContent: {
        type: StringConstructor;
        default: string;
    };
    showJumpButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    linkUrl: {
        type: StringConstructor;
        default: string;
    };
    pureLinkUrl: {
        type: StringConstructor;
        default: string;
    };
    backwardJumpButtonContent: {
        type: StringConstructor;
        default: string;
    };
    forwardJumpButtonContent: {
        type: StringConstructor;
        default: string;
    };
    disablePagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    showEndingButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstPageContent: {
        type: StringConstructor;
        default: string;
    };
    lastPageContent: {
        type: StringConstructor;
        default: string;
    };
    backButtonClass: {
        type: StringConstructor;
        default: string;
    };
    nextButtonClass: {
        type: StringConstructor;
        default: string;
    };
    firstButtonClass: {
        type: StringConstructor;
        default: string;
    };
    lastButtonClass: {
        type: StringConstructor;
        default: string;
    };
    numberButtonsClass: {
        type: StringConstructor;
        default: string;
    };
    startingBreakpointButtonClass: {
        type: StringConstructor;
        default: string;
    };
    endingBreakPointButtonClass: {
        type: StringConstructor;
        default: string;
    };
    firstPageButtonClass: {
        type: StringConstructor;
        default: string;
    };
    lastPageButtonClass: {
        type: StringConstructor;
        default: string;
    };
    paginateButtonsClass: {
        type: StringConstructor;
        default: string;
    };
    disabledPaginateButtonsClass: {
        type: StringConstructor;
        default: string;
    };
    activePageClass: {
        type: StringConstructor;
        default: string;
    };
    paginationContainerClass: {
        type: StringConstructor;
        default: string;
    };
    disabledBreakPointButtonClass: {
        type: StringConstructor;
        default: string;
    };
    backwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
    forwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledBackwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledBackButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledFirstButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledLastButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledNextButtonClass: {
        type: StringConstructor;
        default: string;
    };
    disabledForwardJumpButtonClass: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    itemsPerPage: number;
    currentPage: number;
    maxPagesShown: number;
    dir: string;
    type: string;
    onClick: Function;
    locale: string;
    prevButtonContent: string;
    nextButtonContent: string;
    hidePrevNext: boolean;
    hidePrevNextWhenEnds: boolean;
    showBreakpointButtons: boolean;
    disableBreakpointButtons: boolean;
    startingBreakpointContent: string;
    endingBreakpointButtonContent: string;
    showJumpButtons: boolean;
    linkUrl: string;
    pureLinkUrl: string;
    backwardJumpButtonContent: string;
    forwardJumpButtonContent: string;
    disablePagination: boolean;
    showEndingButtons: boolean;
    firstPageContent: string;
    lastPageContent: string;
    backButtonClass: string;
    nextButtonClass: string;
    firstButtonClass: string;
    lastButtonClass: string;
    numberButtonsClass: string;
    startingBreakpointButtonClass: string;
    endingBreakPointButtonClass: string;
    firstPageButtonClass: string;
    lastPageButtonClass: string;
    paginateButtonsClass: string;
    disabledPaginateButtonsClass: string;
    activePageClass: string;
    paginationContainerClass: string;
    disabledBreakPointButtonClass: string;
    backwardJumpButtonClass: string;
    forwardJumpButtonClass: string;
    disabledBackwardJumpButtonClass: string;
    disabledBackButtonClass: string;
    disabledFirstButtonClass: string;
    disabledLastButtonClass: string;
    disabledNextButtonClass: string;
    disabledForwardJumpButtonClass: string;
}>;
import "/Users/antonrybalkin/Projects/vue-awesome-paginate/src/components/vue-awesome-paginate.vue?vue&type=style&index=0&lang.css";
export default _sfc_main;
//# sourceMappingURL=vue-awesome-paginate.vue.d.ts.map