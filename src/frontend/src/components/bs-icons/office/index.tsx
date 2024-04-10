import React, { forwardRef } from "react";
import { ReactComponent as Word } from "./Word.svg";

export const WordIcon = forwardRef<
    SVGSVGElement & { className: any },
    React.PropsWithChildren<{ className?: string }>
>(({ className, ...props }, ref) => {
    const _className = 'transition text-gray-950 ' + (className || '')
    return <Word ref={ref} {...props} className={_className} />;
});
