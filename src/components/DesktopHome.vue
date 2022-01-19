<template>
  <div>
    <div id="main" style="width: 100vh; height: 85vh"></div>
  </div>
</template>
<script>
import { onMounted, getCurrentInstance, reactive } from "vue";
import * as echarts from "echarts";
export default {
  name: "DesktopHome",
  props: {
    xData: {
      type: Object,
      default: null,
    },
  },
  setup: function (props) {
    let defaultconfig = reactive({
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          mark: { show: true },
          magicType: {
            show: true,
            type: ["line", "bar", "pie", "funnel"],
            option: {
              funnel: {
                x: "25%",
                width: "50%",
                funnelAlign: "left",
                max: 1548,
              },
            },
          },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      tooltip: {},
      xAxis: null,
      yAxis: null,
      series: [],
      title: {
        text: "默认标题",
        subtext: "默认标题",
      },
       legend: {
        orient: "vertical",
        x: "left"
      }
    });
    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      defaultconfig = { ...props.xData };
      console.log(defaultconfig);
      myChart.setOption(defaultconfig);
    });
    return {
      defaultconfig,
    };
  },
};
</script>