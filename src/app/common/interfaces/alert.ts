export type AlertType = 'success' | 'error';

export interface Alert {
    text: string,
    type: AlertType
}