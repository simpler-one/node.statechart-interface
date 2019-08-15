// tslint:disable:no-namespace

export interface StateMachineItem<S, A> {
    state: S;
    transitions: [A, S][];
    startChild?: S;
    children?: StateMachineItem<S, A>[];
}


export interface Statechart {
    name: string;
    states: StatechartItem[];
}

export interface StatechartItem {
    name: string;
    transitions: StatechartTransition[];
    children: StatechartItem[];
}

export interface StatechartTransition {
    action: string;
    destination: string;
}
