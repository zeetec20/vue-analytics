import {getAnalytics, logEvent} from 'firebase/analytics'

export class Analytics {
    constructor(app) {
        this.analytics = getAnalytics(app)   
    }
    analytics = null
    logEvent = (log, data) => logEvent(this.analytics, log, data)
}