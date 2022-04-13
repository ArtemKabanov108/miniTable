import * as React from 'react';

export interface IWrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({children}: IWrapperProps) => {
    return (
        <div>
            {children}
        </div>
    )
}