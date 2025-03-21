export const discard = (r: NginxHTTPRequest, status?: number, body?: NjsStringOrBuffer): false => { r.return(status ?? 403, body); return false; };
