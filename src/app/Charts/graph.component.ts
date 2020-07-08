import { Component, Input } from "@angular/core";
import { EChartOption } from "echarts";

@Component({
  selector: "graph-echart",
  templateUrl: "graph.component.html",
  styleUrls: ["../bootstrap.min.css"]
})

export class graphComponent {
  @Input() patients: Array<any>;
  @Input() chartType:String;

  phenoPool = []

  getPhenotypePool(){
    for(var p of this.patients){
      console.log(p['report_id'])
    }
  }

  chart_data = [
    {
      name: "Grandpa",
      children: [
        {
          name: "Uncle Leo",
          value:3,
          children: [
            { name: "Cousin Jack", value: 1 },
            {
              name: "Cousin Mary",
              value: 2,
              children: [{ name: "Jackson", value: 1 }]
            }
          ]
        },
        {
          name:"Dad Lee",
          value:1,
          children:[]
        }
      ]
    }
  ];
  chartOption: EChartOption = {
    series: [
      {
        type: "sunburst",
        data: this.chart_data,
        radius: [0, "90%"],
        highlightPolicy: "ancestor",
        nodeClick: "link",
        label: {
          rotate: "radial",
          align: "right",
          colour: "auto"
        },
        itemStyle: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              { offset: 0, color: "orange" },
              { offset: 1, color: "red" }
            ],
            global: false
          }
        }
      }
    ]
  };
}
