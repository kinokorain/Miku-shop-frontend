import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';

export default function DatePicker() {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    function handleSelect(ranges: unknown) {
        console.log(ranges);
        setDateRange({
            // @ts-ignore
            startDate: ranges.selection.startDate,
            // @ts-ignore
            endDate: ranges.selection.endDate,
            key: 'selection',
        })
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }
    return (
        <DateRangePicker
            ranges={[dateRange]}
            onChange={handleSelect}
        />
    )
}