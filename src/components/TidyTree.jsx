import React, {Component} from 'react';
import {hierarchy, tree} from "d3-hierarchy";
import {linkHorizontal} from "d3-shape";
import {select} from "d3-selection";

class TidyTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentDidMount() {
        this.createTidyTree();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.createTidyTree();
    }

    createTidyTree() {
        let data = this.state.data;
        let width = 954;
        let myTree = data => {
            const root = hierarchy(data);
            root.dx = 10;
            root.dy = width / (root.height + 1);
            return tree().nodeSize([root.dx, root.dy])(root);
        }

        const root = myTree(data);

        let x0 = Infinity;
        let x1 = -x0;
        root.each(d => {
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

        // eslint-disable-next-line no-unused-vars
        const link = g.append("g")
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .selectAll("path")
            .data(root.links())
            .join("path")
            .attr("d", linkHorizontal()
                .x(d => d.y)
                .y(d => d.x));

        const node = g.append("g")
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .selectAll("g")
            .data(root.descendants())
            .join("g")
            .attr("transform", d => `translate(${d.y},${d.x})`);

        node.append("circle")
            .attr("fill", d => d.children ? "#555" : "#999")
            .attr("r", 2.5);

        node.append("text")
            .attr("fill", "white")
            .attr("dy", "0.31em")
            .attr("x", d => d.children ? -6 : 6)
            .attr("text-anchor", d => d.children ? "end" : "start")
            .text(d => d.data.name)
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
