import React, {Component} from 'react';
import '../scss/Timeline.scss';
import TimelineChart from 'd3-timeline-chart';

class Timeline extends Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.createTimeline();
    }

    componentDidUpdate(_prevProps: any, _prevState: any, _snapshot: any) {
        this.createTimeline();
    }

    createTimeline() {
        const element = this.refs.myNode;
        // @ts-ignore
        const data = [
            {
                "label": "University of Kent",
                "data": [
                    {
                        "label": "Year 1 - BSc Computer Science with a Year in Industry",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Mon Sep 26 2016 00:00:00 GMT+0100 (British Summer Time)",
                        "to": "Thu Jun 15 2017 00:00:00 GMT+0100 (British Summer Time)"
                    },
                    {
                        "label": "Year 2 - BSc Computer Science with a Year in Industry",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Mon Sep 25 2017 00:00:00 GMT+0100 (British Summer Time)",
                        "to": "Sat May 26 2018 00:00:00 GMT+0100 (British Summer Time)"
                    },
                    {
                        "label": "Final Year - BSc Computer Science with a Year in Industry",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Mon Sep 23 2019 00:00:00 GMT+0100 (British Summer Time",
                        "to": "Fri Jun 26 2020 00:00:00 GMT+0100 (British Summer Time)"
                    }
                ]
            },
            {
                "label": "Newberry College",
                "data": [
                    {
                        "label": "Mathematics Major",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Sat Jan 10 2015 00:00:00 GMT+0000 (Greenwich Mean Time)",
                        "to": "Mon Oct 19 2015 00:00:00 GMT+0100 (British Summer Time)"
                    }
                ]
            },
            {
                "label": "The Open University",
                "data": [
                    {
                        "label": "Certificate of Higher Education",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Fri Jun 15 2012 00:00:00 GMT+0100 (British Summer Time)",
                        "to": "Tue Jul 15 2014 00:00:00 GMT+0100 (British Summer Time)"
                    }
                ]
            },
            {
                "label": "The Harvey Grammar",
                "data": [
                    {
                        "label": "GCSE (General Certificate of Higher Education)",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Wed Sep 05 2007 00:00:00 GMT+0100 (British Summer Time)",
                        "to": "Sun Jul 15 2012 00:00:00 GMT+0100 (British Summer Time)"
                    }
                ]
            },
            {
                "label": "RBT & RBR",
                "data": [
                    {
                        "label": "Year in Industry - IT Student Placement",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Mon Jun 25 2018 00:00:00 GMT+0100 (British Summer Time)",
                        "to": "Mon Jun 24 2019 00:00:00 GMT+0100 (British Summer Time)"
                    }
                ]
            },
            {
                "label": "IT-Alan",
                "data": [
                    {
                        "label": "Assistant Engineer",
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": "Fri Jun 16 2017 00:00:00 GMT+0100 (British Summer Time)",
                        "to": "Fri Sep 01 2017 00:00:00 GMT+0100 (British Summer Time)"
                    }
                ]
            }
        ];

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const timeline = new TimelineChart(element, data, {
            // TODO: Get d3-tip working for timeline
            tip: function (d: { at: any; from: any; to: any; }) {
                return d.at || `${d.from}<br>${d.to}`;
            },
            height: 300
        });
    }

    render() {
        return (
            <div id="chart" ref="myNode"/>
        );
    }
}

export default Timeline;
