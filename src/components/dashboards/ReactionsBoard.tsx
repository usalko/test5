import React from 'react'


export interface ReactionsBoardProps {
    className?: string
}

export const ReactionsBoard: React.FC<ReactionsBoardProps> = ({ className = '' }) => {

    return (
        <div className={className}>
        </div>
    )
}