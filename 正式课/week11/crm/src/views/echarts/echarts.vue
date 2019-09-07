<template>
  <div>
    <div ref="box1" style="width:300px;height:300px"></div>
    <div ref="box2" style="width:800px;height:500px"></div>
  </div>
</template>

<script>
// 引入echarts
import myEcharts from "echarts";
export default {
  mounted() {
    this.init1();
    this.init2();
  },
  methods: {
    init1() {
      // 基于准备好的dom，初始化echarts实例
      // echarts初始化时 传递的参数是一个DOM元素
      var myChart = myEcharts.init(this.$refs.box1);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },

    init2() {
      var myEchart = myEcharts.init(this.$refs.box2);
      var option = {
        backgroundColor: "#0044bb",
        tooltip: {
          formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: "50%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[0.09, "lime"], [0.82, "#1e90ff"], [1, "#ff4500"]],
                width: 3,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            splitLine: {
              // 分隔线
              length: 25, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              // 分隔线
              shadowColor: "#fff", //默认透明
              shadowBlur: 5
            },
            title: {
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 20,
                fontStyle: "italic",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            detail: {
              backgroundColor: "rgba(30,144,255,0.8)",
              borderWidth: 1,
              borderColor: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
              offsetCenter: [0, "50%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                color: "#fff"
              }
            },
            data: [{ value: 40, name: "km/h" }]
          },
          {
            name: "转速",
            type: "gauge",
            center: ["25%", "55%"], // 默认全局居中
            radius: "30%",
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[0.29, "lime"], [0.86, "#1e90ff"], [1, "#ff4500"]],
                width: 2,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 5,
              shadowColor: "#fff", //默认透明
              shadowBlur: 5
            },
            title: {
              offsetCenter: [0, "-30%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontStyle: "italic",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            detail: {
              //backgroundColor: 'rgba(30,144,255,0.8)',
              // borderWidth: 1,
              borderColor: "#fff",
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
              width: 80,
              height: 30,
              offsetCenter: [25, "20%"], // x, y，单位px
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                color: "#fff"
              }
            },
            data: [{ value: 1.5, name: "x1000 r/min" }]
          },
          {
            name: "油表",
            type: "gauge",
            center: ["75%", "50%"], // 默认全局居中
            radius: "30%",
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[0.2, "lime"], [0.8, "#1e90ff"], [1, "#ff4500"]],
                width: 2,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisLabel: {
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              },
              formatter: function(v) {
                switch (v + "") {
                  case "0":
                    return "E";
                  case "1":
                    return "Gas";
                  case "2":
                    return "F";
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 2,
              shadowColor: "#fff", //默认透明
              shadowBlur: 5
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{ value: 0.5, name: "gas" }]
          },
          {
            name: "水表",
            type: "gauge",
            center: ["75%", "50%"], // 默认全局居中
            radius: "30%",
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[0.2, "lime"], [0.8, "#1e90ff"], [1, "#ff4500"]],
                width: 2,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            axisTick: {
              // 坐标轴小标记
              show: false
            },
            axisLabel: {
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              },
              formatter: function(v) {
                switch (v + "") {
                  case "0":
                    return "H";
                  case "1":
                    return "Water";
                  case "2":
                    return "C";
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 10
              }
            },
            pointer: {
              width: 2,
              shadowColor: "#fff", //默认透明
              shadowBlur: 5
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{ value: 0.5, name: "gas" }]
          }
        ]
      }

      setInterval(function() {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
        option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
        myEchart.setOption(option);
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>