import React from 'react'


export interface ReactionsDashboardProps {
    className?: string
}

export const ReactionsDashboard: React.FC<ReactionsDashboardProps> = ({ className = '' }) => {

    return (
        <div className={className}>
        </div>
    )
}