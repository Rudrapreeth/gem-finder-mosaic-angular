declare module 'd3-org-chart' {
  export class OrgChart {
    constructor();
    container(selector: string | HTMLElement): this;
    data<T>(data: T[]): this;
    nodeId(accessor: (d: any) => any): this;
    parentNodeId(accessor: (d: any) => any): this;
    nodeContent(formatter: (d: any) => string): this;
    render(): this;
  }
} 