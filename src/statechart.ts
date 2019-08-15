// tslint:disable:no-namespace

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
