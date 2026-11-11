export function shipmentDateRange(){const start=new Date();start.setDate(start.getDate()+5);const end=new Date();end.setDate(end.getDate()+7);const fmt=d=>d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});return `${fmt(start)} – ${fmt(end)}`}
export function shipmentDateValue(){const d=new Date();d.setDate(d.getDate()+5);return d.toISOString()}
