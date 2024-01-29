//INFO: component example, just pasted, renamed
//SEE: https://primereact.org/calendar/#basic

import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export function MiCalendar() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}
   
