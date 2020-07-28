import React, {Component} from 'react';
import {max, range} from 'd3-array';
import {axisTop, axisLeft} from 'd3-axis';
import {scaleBand, scaleLinear} from 'd3-scale'
import {select} from 'd3-selection';

interface MyState {
    data: {
        name: string, value: number
    }[]
}

class BarChart extends Component<MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentDidMount() {
        this.createBarChart();
    }

    componentDidUpdate(_prevProps: any, _prevState: any, _snapshot: any) {
        this.createBarChart();
    }

    createBarChart() {
        // TODO: Add sorting of data by data.value, and put JSON content into random order to test
        // @ts-ignore
        let data = this.state.data;
        let margin = ({top: 30, right: 0, bottom: 10, left: 240});
        let barHeight = 20;
        let width = 500;
        let height = Math.ceil((data.length + 0.1) * barHeight) + margin.top + margin.bottom;
        let x = scaleLinear()
            .domain([0, max(data, (d: { value: number; }) => d.value)])
            .range([margin.left, width - margin.right]);
        let y = scaleBand()
            .domain(range(data.length))
            .rangeRound([margin.top, height - margin.bottom])
            .padding(0.1);
        let format = x.tickFormat(20, data.format);
        let xAxis = (g: { attr: (arg0: string, arg1: string) => { (): any; new(): any; call: { (arg0: any): { (): any; new(): any; call: { (arg0: (g: any) => any): any; new(): any; }; }; new(): any; }; }; }) => g
            .attr("transform", `translate(0,${margin.top})`)
            .call(axisTop(x).ticks(width / 80, data.format))
            .call(g => g.select(".domain").remove());
        let yAxis = (g: { attr: (arg0: string, arg1: string) => { (): any; new(): any; call: { (arg0: any): any; new(): any; }; }; }) => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y).tickFormat((i: string | number) => data[i].name).tickSizeOuter(0));

        const svg = select(this.refs.myNode)
            .append("svg")
            .attr("viewBox", [0, 0, width, height]);

        // TODO: Add x-axis label saying: 'module result in %'

        svg.append("g")
            .attr("fill", "steelblue")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", x(0))
            .attr("y", (_d: any, i: any) => y(i))
            .attr("width", (d: { value: any; }) => x(d.value) - x(0))
            .attr("height", y.bandwidth());

        svg.append("g")
            .attr("fill", "white")
            .attr("text-anchor", "end")
            .attr("font-family", "sans-serif")
            .attr("font-size", 12)
            .selectAll("text")
            .data(data)
            .join("text")
            .attr("x", (d: { value: any; }) => x(d.value))
            .attr("y", (_d: any, i: any) => y(i) + y.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("dx", -4)
            .text((d: { value: any; }) => format(d.value))
            .call((text: { filter: (arg0: (d: any) => boolean) => { (): any; new(): any; attr: { (arg0: string, arg1: number): { (): any; new(): any; attr: { (arg0: string, arg1: string): { (): any; new(): any; attr: { (arg0: string, arg1: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => text.filter(d => x(d.value) - x(0) < 20) // short bars
                .attr("dx", +4)
                .attr("fill", "black")
                .attr("text-anchor", "start"));

        svg.append("g")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);
    }

    render() {
        return (
            <div ref="myNode"/>
        );
    }
}

export default BarChart;
