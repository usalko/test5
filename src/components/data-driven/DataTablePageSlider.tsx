import { Slider, SliderFilledTrack, SliderProps, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React from 'react'
import { purifyProps } from '../../utils/purify-props'
import { DataTablePageCursor } from './DataTablePageCursor'

export interface DataTableSliderProps extends SliderProps {
    className?: string
    pageCursor?: DataTablePageCursor
}

export const DataTableSlider: React.FC<DataTableSliderProps> = (props) => {

    return (
        <Slider {...purifyProps(props, ['pageCursor'])}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
}