import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';

export default function DatePicker(props: { handleDateRangeChange: (startDate: number, endDate: number) => void }) {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    function dateToUnixEpoch(date: Date): number {
        return Math.floor(date.getTime()) / 1000;
    }

    function handleSelect(ranges: unknown) {
        console.log(ranges);
        setDateRange({
            // @ts-expect-error fff
            startDate: ranges.selection.startDate,
            // @ts-expect-error fff
            endDate: ranges.selection.endDate,
            key: 'selection',
        })
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }

        //pass the ranges.selection.startDate and endDate to a handle function 
        props.handleDateRangeChange(dateToUnixEpoch(ranges.selection.startDate), dateToUnixEpoch(ranges.selection.endDate));
    }

    return (
        <DateRangePicker
            ranges={[dateRange]}
            onChange={handleSelect}
        />
    )
}