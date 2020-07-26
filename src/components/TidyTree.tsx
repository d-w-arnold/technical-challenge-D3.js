import React, {Component} from 'react';
import {hierarchy, tree} from "d3-hierarchy";
import {select} from "d3-selection";
import {linkHorizontal} from "d3-shape";

interface MyState {
    data: {
        name: string;
        children: any;
    }
}

class TidyTree extends Component<MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentDidMount() {
        this.createTidyTree();
    }

    componentDidUpdate(_prevProps: any, _prevState: any, _snapshot: any) {
        this.createTidyTree();
    }

    createTidyTree() {
        // @ts-ignore
        let data = this.state.data;
        let width = 954;
        let myTree = (data: any) => {
            const root = hierarchy(data);
            root.dx = 10;
            root.dy = width / (root.height + 1);
            return tree().nodeSize([root.dx, root.dy])(root);
        }

        const root = myTree(data);

        let x0 = Number.POSITIVE_INFINITY;
        let x1 = Number.NEGATIVE_INFINITY;
        root.each((d: { x: number; }) => {
            if (d.x > x1) x1 = d.x;
            if (d.x < x0) x0 = d.x;
        });

        const svg = select(this.refs.myNode)
            .append("svg")
            .attr("viewBox", [0, 0, width, x1 - x0 + root.dx * 2]);

        const g = svg.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("transform", `translate(${root.dy / 3},${root.dx - x0})`);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const link = g.append("g")
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .selectAll("path")
            .data(root.links())
            .join("path")
            .attr("d", linkHorizontal()
                .x((d: { y: any; }) => d.y)
                .y((d: { x: any; }) => d.x));

        const node = g.append("g")
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .selectAll("g")
            .data(root.descendants())
            .join("g")
            .attr("transform", (d: { y: any; x: any; }) => `translate(${d.y},${d.x})`);

        node.append("circle")
            .attr("fill", (d: { children: any; }) => d.children ? "#555" : "#999")
            .attr("r", 2.5);

        node.append("text")
            .attr("fill", "white")
            .attr("dy", "0.31em")
            .attr("x", (d: { children: any; }) => d.children ? -6 : 6)
            .attr("text-anchor", (d: { children: any; }) => d.children ? "end" : "start")
            .text((d: { data: { name: any; }; }) => d.data.name)
            .clone(true).lower()

        return svg.node();
    }

    render() {
        return (
            <div ref="myNode"/>
        );
    }
}

export default TidyTree;
