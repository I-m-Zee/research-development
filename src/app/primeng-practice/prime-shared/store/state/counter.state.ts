export interface iCounterState {
    counter: number;
    name: string;
}

export const initialState: iCounterState = {
    counter: 0,
    name: 'NGrX Counter'
}