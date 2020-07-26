import React, {Component} from 'react';
import '../scss/Timeline.scss';
import TimelineChart from 'd3-timeline-chart';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentDidMount() {
        this.createTimeline();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.createTimeline();
    }

    createTimeline() {
        const element = this.refs.myNode;
        const data = [
            {
                "label": "University of Kent",
                "data": [
                    {
                        "label": 'Year 1 - BSc Computer Science with a Year in Industry',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2016, 9, 26]),
                        "to": new Date([2017, 6, 15])
                    },
                    {
                        "label": 'Year 2 - BSc Computer Science with a Year in Industry',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2017, 9, 25]),
                        "to": new Date([2018, 5, 26])
                    },
                    {
                        "label": 'Final Year - BSc Computer Science with a Year in Industry',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2019, 9, 23]),
                        "to": new Date([2020, 6, 26])
                    }
                ]
            },
            {
                "label": "RBT & RBR",
                "data": [
                    {
                        "label": 'IT Student Placement - Year in Industry',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2018, 6, 25]),
                        "to": new Date([2019, 6, 24])
                    }
                ]
            },
            {
                "label": "IT-Alan",
                "data": [
                    {
                        "label": 'Assistant Engineer',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2017, 6, 16]),
                        "to": new Date([2017, 9, 1])
                    }
                ]
            },
            {
                "label": "Newberry College",
                "data": [
                    {
                        "label": 'Mathematics Major',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2015, 1, 10]),
                        "to": new Date([2015, 10, 19])
                    }
                ]
            },
            {
                "label": "The Open University",
                "data": [
                    {
                        "label": 'Certificate of Higher Education',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2012, 6, 15]),
                        "to": new Date([2014, 7, 15])
                    }
                ]
            },
            {
                "label": "The Harvey Grammar",
                "data": [
                    {
                        "label": 'GCSE (General Certificate of Higher Education)',
                        "type": TimelineChart.TYPE.INTERVAL,
                        "from": new Date([2007, 9, 5]),
                        "to": new Date([2012, 7, 15])
                    }
                ]
            }
        ];

        const timeline = new TimelineChart(element, data, {
            // TODO: Get d3-tip working for timeline
            tip: function (d) {
                return d.at || `${d.from}<br>${d.to}`;
            },
            height: 300
        });

        console.log(timeline);
    }

    render() {
        return (
            <div id="chart" ref="myNode"/>
        );
    }
}

export default Timeline;
