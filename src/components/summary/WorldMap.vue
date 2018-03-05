<style scoped>
.wrapper {
    position: relative;
}
.index-container {
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px;
    width: 100vw;
}
.index-tag {
    font-size: 16px;
    margin-bottom: 5px;
}
.tag{
    height: 60px;
    background-color: rgba(43,37,37,.1);
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    margin-right: 10px;
}
.tag-wrapper {
    background-color: yellow;
    border-color: yellow;
}
.tag-top{
    font-size: 15px;
    color: #1f2d3d;;
    margin-bottom: 9px;
}
.tag-up{
  border-color: rgba(255,73,73,.2);
  color: #bfcbd9;
  margin-left: 0.9vw;
}
.tag-down{
    border-color: rgba(255,73,73,.2);
    color: #1f2d3d;
    font-weight: 700;
}
.tag-area {    
    font-size: 13px;
    color: #333;
}
.tag-bottom {    
    font-size: 17px;
}
.text-center {
    width: 100%;
    text-align: center;
}
.dialog{
position: absolute;
height: 100vh;
margin-top: -65px;
}
.el-dialog__title{
  font-size: 40px;
}
</style>


<template>
  <div>
    <div class="wrapper">
        <div ref="world-map"></div>
        <div class="index-container">
            <!-- <el-tag class="index-tag">基础维指数: </el-tag> -->
            <div class="tag" @click="showDetialModal('jichu')">
            <el-button type="danger" class="tag-wrapper">
                <!-- <div class="tag-area text-center">{{curArea}}</div> -->
                <div class="tag-top text-center">基础维指数</div>
                <div class="tag-bottom">
                    <span class="tag-down">{{this.risk}}</span>
                </div>    
            </el-button>
            <!-- <div class="tag-wrapper">
              <div class="tag-area text-center">{{curArea}}</div>
              <div class="tag-top text-center">基础维指数</div>
              <div class="tag-bottom">
                <span class="tag-down">{{this.risk}}</span>
              </div>
            </div> -->
            </div>

            <div class="tag" @click="showDetialModal('cuiruo')">
            <el-button type="danger" class="tag-wrapper">
              <!-- <div class="tag-area text-center">{{curArea}}</div> -->
              <div class="tag-top text-center">脆弱维指数</div>
              <div class="tag-bottom"><span class="tag-down">{{this.vulnerability}}</span></div>
            </el-button>
            </div>
            <div class="tag" @click="showDetialModal('weixie')">
            <el-button type="danger" class="tag-wrapper">
                <!-- <div class="tag-area text-center">{{curArea}}</div> -->
              <div class="tag-top text-center">威胁维指数</div>
              <div class="tag-bottom"><span class="tag-down">{{this.threat}}</span></div>
            </el-button>
            </div>
            <div class="tag" @click="showDetialModal('zonghe')">
            <el-button type="danger" class="tag-wrapper">
              <!-- <div class="tag-area text-center">{{curArea}}</div> -->
              <div class="tag-top text-center">综合维指数</div>
              <div class="tag-bottom"><span class="tag-down">{{this.integrate}}</span></div>
            </el-button>
            </div>
            <!-- <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            size="full"
            class="dialog"
            @close="modalClose"
            >
          </keep-alive>
          <router-view></router-view>
          </keep-alive>
          </el-dialog> -->
        </div>
    </div>
  </div>
</template>

<script>
    import echarts from 'echarts'
    import 'echarts/map/js/world.js'
    import 'echarts/map/js/china.js'
    import axios from 'axios'
    import './provincesMap.js'
    import * as REGION from './regionCN2En.js'
    // import io from 'socket.io-client';
    import up from './pics/arrow-up.png'
    import down from './pics/arrow-down.png'
    import mapName from './util/nameTransfer.js'
    export default {
        data() {
            return {
                optionWorld: null,
                optionChina: null,
                optionProvince: null,
                worldMapContainer: null,
                myChart: null,
                iconUp: up,
                iconDown: down,
                iconWidth: '16px',
                iconHeight: '16px',
                // dialogVisible: false,
                title:"",
                modelCurrentSelect:"",
                indexValue: {
                    threatArr: [],
                    riskArr: [],
                    vulnerabilityArr: [],
                    integrateArr: [],
                    area: 'China',
                    isCN: false,
                },
                country_en2cn: new Map(),
                curArea: '中国'
            }
        },
        computed: {
            threat() {
                const reg = new RegExp("[\u4E00-\u9FA5]+")
                let area
                if (reg.test(this.indexValue.area)) {
                    area = this.indexValue.area
                } else {
                    area = this.country_en2cn.get(this.indexValue.area)
                }
                const threat = this.indexValue.threatArr.filter(item => item.name === area)[0]
                if (!threat && ['市', '县'].includes(this.indexValue.area.substr(this.indexValue.area.length - 1))) {
                    const threatItem = this.optionProvince.series[0].data.filter(i => i.name === this.indexValue.area)[0]
                    return threatItem ? threatItem.value : 0
                }
                return threat ? threat.value : 0
            },
            risk() {
                const reg = new RegExp("[\u4E00-\u9FA5]+")
                let area
                if (reg.test(this.indexValue.area)) {
                    area = this.indexValue.area
                } else {
                    area = this.country_en2cn.get(this.indexValue.area)
                }
                this.curArea = area;
                const risk = this.indexValue.riskArr.filter(item => item.name === area)[0]
                return risk ? risk.value : 0
            },
            vulnerability() {
                const reg = new RegExp("[\u4E00-\u9FA5]+")
                let area
                if (reg.test(this.indexValue.area)) {
                    area = this.indexValue.area
                } else {
                    area = this.country_en2cn.get(this.indexValue.area)
                }
                const vulnerability = this.indexValue.vulnerabilityArr.filter(item => item.name === area)[0]
                return vulnerability ? vulnerability.value : 0
            },
            integrate() {
                const reg = new RegExp("[\u4E00-\u9FA5]+")
                let area
                if (reg.test(this.indexValue.area)) {
                    area = this.indexValue.area
                } else {
                    area = this.country_en2cn.get(this.indexValue.area)
                }
                const integrate = this.indexValue.integrateArr.filter(item => item.name === area)[0];
                return integrate ? integrate.value : 0;
            }
        },
        methods: {
            // 用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            resizeWorldMapContainer() {
                this.worldMapContainer.style.width = window.innerWidth + 'px';
                this.worldMapContainer.style.height = window.innerHeight - 60 + 'px';
            },
            getThreat() {
                return axios.get('/data/index/threat-index')
            },
            getRisk() {
                return axios.get('/data/index/base-index')
            },
            getVulnerability() {
                return axios.get('/data/index/vulnerability-index')
            },
            getIntegrate() {
                return axios.get('/data/index/integrate_index')
            },
            getIndexValue(area = 'China') {
                return axios.all([this.getThreat(), this.getRisk(), this.getVulnerability(), this.getIntegrate()])
                    .then(([data1, data2, data3, data4]) => {
                        this.indexValue.threatArr = data1.data || []
                        this.indexValue.riskArr = data2.data || []
                        this.indexValue.vulnerabilityArr = data3.data || []
                        this.indexValue.integrateArr = data4.data || []
                    })
            },
            getEventTopK(topk = 10, area = '') {
                axios.get(`/data/event-custom-topk/topk/${topk}/area/${area}`).then(({ data }) => {
                    console.log("待");
                    if(data.length > 0) {
                        this.optionWorld.yAxis[0].data = data.map(i => {
                            let name = i.name
                            if (name.length > 5) {
                                name = name.substring(0, 5) + '...'
                            }
                            return name
                        })
                        this.optionWorld.series[3].data = data
                        this.myChart.setOption(this.optionWorld);
                    }
                })
            },
            getAlarmTopK(topk = 10, area = '') {
                axios.get(`/data/alarm-type-topk/topk/${topk}/area/${area}`).then(({ data }) => {
                    if(data.length > 0) {
                        this.optionWorld.yAxis[1].data = data.map(i => {
                            let name = i.name
                            if (name.length > 5) {
                                name = name.substring(0, 5) + '...'
                            }
                            return name
                        })
                        this.optionWorld.series[4].data = data
                        this.myChart.setOption(this.optionWorld);
                    }
                })
            },
            onMapHover(params) {
                switch(params.seriesName) {
                    // 世界地图
                    case '威胁指数':
                        if (this.indexValue.area !== params.name) {
                            this.indexValue.area = params.name
                            this.optionWorld.series[2].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                            this.myChart.setOption(this.optionWorld, true)
                        }
                        break
                    case '中国地图':
                        if (this.indexValue.area !== params.name) {
                            this.indexValue.area = params.name
                            this.optionChina.series[1].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                            this.myChart.setOption(this.optionChina, true)
                        }
                        break
                    case '省地图':
                        if (this.indexValue.area !== params.name) {
                            this.indexValue.area = params.name.substring(0, params.name.length - 1)
                            this.optionProvince.series[1].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                            this.myChart.setOption(this.optionProvince, true)
                        }
                }
            },
            showDetialModal(type){
              this.$nextTick( () => {
                console.log(this.indexValue.area);
                  this.transChinese()
                  this.$store.commit('areaChange',this.indexValue.area)
                  this.$router.push(`/${type}`)
              })

            },
            transChinese() {
              let reg = new RegExp("[\u4E00-\u9FA5]+")
              if (!reg.test(this.indexValue.area)) {
                 this.indexValue.area = this.country_en2cn.get(this.indexValue.area)
              }
            }
        },
        mounted() {
            this.worldMapContainer = this.$refs['world-map']

            // 设置容器高宽
            this.resizeWorldMapContainer();

            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(this.worldMapContainer);

            // 监听window宽高变化，用于使chart自适应高度和宽度
            window.addEventListener('resize', () => {
                // 重置容器高宽
                this.resizeWorldMapContainer();
                this.myChart.resize();
            })

            const country_cn2en = new Map()
            REGION.global.forEach(i => country_cn2en.set(i.cn, i.en))

            this.optionWorld = {
                // 图表标题
                title: [
                    {
                        text: '网络安全态势感知系统',
                        sublink: '#',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 26,
                            height: 100,
                            verticalAlign: 'bottom',
                            lineHeight: 60
                        }
                    },
                    {
                        // text: '综合指数',
                        left: '8%',
                        top: '3%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 12
                        }
                    },
                    // {
                    //     text: '三角指数',
                    //     right: '8%',
                    //     top: '3%',
                    //     textStyle: {
                    //         color: '#ffffff',
                    //         fontStyle: 'normal',
                    //         fontWeight: 'bolder',
                    //         fontFamily: 'sans-serif',
                    //         fontSize: 12
                    //     }
                    // },
                    {
                        text: 'Top-10 事件',
                        left: '5%',
                        bottom: '52%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 16
                        }
                    },
                    {
                        text: 'Top-10 攻击',
                        left: '5%',
                        bottom: '24%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 16
                        }
                    }
                ],
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.seriesName + '<br/>' + params.name + ' : ' + params.value;
                    }
                },
                backgroundColor: '#25499F',
                // 地图图表的可视化配置
                visualMap: {
                    left: '25%',
                    right: '60%',
                    top: '70%',
                    bottom: '50%',
                    min: 45,
                    max: 59,
                    seriesIndex: [0],
                    text: ['High', 'Low'],
                    show: false,
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                grid: [
                    {
                        left: '1%',
                        right: '80%',
                        top: '40%',
                        bottom: '30%',
                        containLabel: true
                    },
                    // 事件
                     {
                        left: '1%',
                        right: '85%',
                        top: '47%',
                        bottom: '30%',
                        containLabel: true
                    },
                    // 告警
                     {
                        left: '1%',
                        right: '85%',
                        top: '75%',
                        bottom: '4%',
                        containLabel: true
                    }
                ],
                xAxis: [
                    {   // 事件
                        position: 'top',
                        gridIndex: 1,
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false
                        }
                    }, {
                        position: 'top',
                        // inverse: true,
                        gridIndex: 2,
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        // name: '事件类型',
                        gridIndex: 1,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        inverse: true,
                        data: []
                    }, {
                        // name: '告警类型',
                        gridIndex: 2,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        inverse: true,
                        // position: 'right',
                        data: []
                    }
                ],
                radar: [
                    {
                        indicator: [
                            {text: '威胁指数'},
                            {text: '基础指数'},
                            {text: '脆弱指数'},
                            {text: '综合指数'}
                        ],
                        center: ['90%', '15%'],
                        radius: '16%',
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'polygon',
                        name: {
                            formatter: function (value, indicator) {
                                return '【' + value + '】';
                            },
                            textStyle: {
                                color: '#72ACD1'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(114, 172, 209, 0.2)',
                                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '综合维指数',
                        type: 'map',
                        // mapType: 'world',
                        // roam: true,
                        geoIndex: 0,
                        data: []
                    },
                    {
                        type: 'lines',
                        coordinateSystem: 'geo',
                        geoIndex: 0,
                        zlevel: 9999,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.4,
                            color: '#46bee9',
                            symbolSize: 3
                        },
                        lineStyle: {
                            normal: {
                                color: '#46bee9',
                                width: 1,
                                curveness: 0.2,
                                opacity: 0
                            }
                        },
                        data: [
                            {
                                coords: [
                                    [116.4551, 40.2539],
                                    [121.4648, 31.2891]
                                ],
                                fromName: "北京",
                                toName: "上海"
                            }
                        ]
                    },
                    {
                        name: '指数雷达',
                        type: 'radar',
                        itemStyle: {
                            emphasis: {
                                // color: 各异,
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: [
                            // {
                            //     value: [100, 8, 0.40],
                            //     name: '预测指数',
                            //     symbol: 'rect',
                            //     symbolSize: 5,
                            //     lineStyle: {
                            //         normal: {
                            //             type: 'dashed'
                            //         }
                            //     }
                            // },
                            {
                                value: [0, 0, 0, 0],
                                name: '当前指数',
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: 'event-topk',
                        type: 'bar',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        tooltip: {
                            formatter: function (params) {
                                return params.data.name + '<br>' + params.value;
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#39a4da'
                            }
                        },
                        data: [],
                    },
                    {
                        name: 'alarm-topk',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        tooltip: {
                            formatter: function (params) {
                                return params.data.name + '<br>' + params.value;
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ad1717'
                            }
                        },
                        // label: {
                        //     normal: {
                        //         show: true,
                        //         position: 'right',
                        //         textStyle: {
                        //             color: '#ddd'
                        //         }
                        //     }
                        // },
                        data: [],
                    }
                ],
                // 使 map 和 其他 series（例如散点图）就可以共享一个 geo 组件了
                geo: {
                    map: 'world',
                    roam: true
                }
            };

            this.myChart.setOption(this.optionWorld);

            this.myChart.on('dblclick', (params) => {
                if (params.seriesName === '综合维指数') {
                    if (params.name !== 'China') {
                        this.indexValue.area = params.name
                        this.optionWorld.series[2].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                        this.myChart.setOption(this.optionWorld)

                        this.getEventTopK(10, this.country_en2cn.get(params.name))
                        this.getAlarmTopK(10, this.country_en2cn.get(params.name))
                    }

                    if (params.name === 'China') {
                        // 进入中国地图
                        this.myChart.resize()
                        this.myChart.setOption(this.optionChina, true);

                        // 加载中国威胁指数
                        axios.get('/data/index/threat-index-china', {}).then((response) => {
                            this.optionChina.series[0].data = response.data;
                            this.myChart.setOption(this.optionChina);
                        })

                        // 雷达指数
                        this.indexValue.area = 'China'
                        this.optionChina.series[1].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                        this.myChart.setOption(this.optionChina)

                        let area = '中国', topk = 10
                        // event topk
                        axios.get(`/data/event-custom-topk/topk/${topk}/area/${area}`).then(({ data }) => {
                            this.optionChina.yAxis[0].data = data.map(i => {
                                let name = i.name
                                if (name.length > 5) {
                                    name = name.substring(0, 5) + '...'
                                }
                                return name
                            })
                            this.optionChina.series[2].data = data
                            this.myChart.setOption(this.optionChina);
                        })
                        // alarm topk
                        axios.get(`/data/alarm-type-topk/topk/${topk}/area/${area}`).then(({ data }) => {
                            this.optionChina.yAxis[1].data = data.map(i => {
                                let name = i.name
                                if (name.length > 5) {
                                    name = name.substring(0, 5) + '...'
                                }
                                return name
                            })
                            this.optionChina.series[3].data = data
                            this.myChart.setOption(this.optionChina);
                        })
                    }
                } else if (params.seriesName === '中国地图') {
                    // 进入省份地图
                    this.myChart.resize()
                    this.optionProvince.geo.map = params.name
                    this.myChart.setOption(this.optionProvince, true)

                    // 地图指数
                    axios.get('/data/index/threat-index-city', {}).then((response) => {
                        this.optionProvince.series[0].data = response.data.map(i => {
                            if (['市', '县'].indexOf(i.name.substr(i.name.length - 1)) === -1) {
                                i.name = i.name + '市'
                            }
                            return i
                        });
                        var arr = response.data.map(i => ({
                              name: i.name.substring(0, i.name.length - 1),
                              value: i.value
                        }))
                        this.indexValue.threatArr = this.indexValue.threatArr.concat(arr)
                        // console.log(optionProvince.series[0].data)
                        this.myChart.setOption(this.optionProvince);
                    }).catch(error => console.log(error.message));

                    // 雷达指数
                    this.indexValue.area = params.name
                    this.optionProvince.series[1].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                    this.myChart.setOption(this.optionProvince)

                    let area = params.name, topk = 10
                    // event topk
                    axios.get(`/data/event-custom-topk/topk/${topk}/area/${area}`).then(({ data }) => {
                        this.optionProvince.yAxis[0].data = data.map(i => {
                            let name = i.name
                            if (name.length > 5) {
                                name = name.substring(0, 5) + '...'
                            }
                            return name
                        })
                        this.optionProvince.series[2].data = data
                        this.myChart.setOption(this.optionProvince);
                    })
                    // alarm topk
                    axios.get(`/data/alarm-type-topk/topk/${topk}/area/${area}`).then(({ data }) => {
                        this.optionProvince.yAxis[1].data = data.map(i => {
                            let name = i.name
                            if (name.length > 5) {
                                name = name.substring(0, 5) + '...'
                            }
                            return name
                        })
                        this.optionProvince.series[3].data = data
                        this.myChart.setOption(this.optionProvince);
                    })
                } else if (params.seriesName === '省地图') {
                    // 雷达指数
                    this.indexValue.area = params.name
                    const threatItem = this.optionProvince.series[0].data.filter(i => i.name === params.name)[0]
                    let threat = threatItem ? threatItem.value : 0
                    this.optionProvince.series[1].data[0].value = [threat, this.risk, this.vulnerability, this.integrate]
                    this.myChart.setOption(this.optionProvince)

                    let area = params.name, topk = 10
                    area = area.substring(0, area.length - 1)
                    // event topk
                    axios.get(`/data/event-custom-topk/topk/${topk}/area/?city=${area}`).then(({ data }) => {
                        this.optionProvince.yAxis[0].data = data.map(i => {
                            let name = i.name
                            if (name.length > 5) {
                                name = name.substring(0, 5) + '...'
                            }
                            return name
                        })
                        this.optionProvince.series[2].data = data
                        this.myChart.setOption(this.optionProvince);
                    })
                    // alarm topk
                    axios.get(`/data/alarm-type-topk/topk/${topk}/area/?city=${area}`).then(({ data }) => {
                        this.optionProvince.yAxis[1].data = data.map(i => {
                            let name = i.name
                            if (name.length > 5) {
                                name = name.substring(0, 5) + '...'
                            }
                            return name
                        })
                        this.optionProvince.series[3].data = data
                        this.myChart.setOption(this.optionProvince);
                    })
                } else if (params.seriesName === 'alarm-topk') {
                    this.$router.push({ path: '/alarms', query: { content: params.name } })
                } else if (params.seriesName === 'event-topk') {
                    this.$router.push({ path: '/events', query: { content: params.data.name } })
                }
            });
            
            this.myChart.on('click', this.onMapHover);

            // 雷达指数
            this.getIndexValue().then(() => {
                this.optionWorld.series[2].data[0].value = [this.threat, this.risk, this.vulnerability, this.integrate]
                this.myChart.setOption(this.optionWorld)
            }).then(() => {
                // 地图上的指数值
                this.optionWorld.series[0].data = this.indexValue.integrateArr.map(i => {
                    const name = country_cn2en.get(i.name)
                    const value = i.value
                    return { name, value }
                });
                this.myChart.setOption(this.optionWorld);
            })
            // 获取攻击线路数据
            // axios.all([axios.get('/data/locations'), axios.get('/data/alarms')]).then((response) => {
            //     let alarms = response[1].data.data
            //     let locations = response[0].data

            //     const locMap = new Map()
            //     locations.forEach(location => {
            //         locMap.set(location.country, location)
            //     })

            //     const linesData = alarms.map((alarm) => {
            //         const srcName = country_cn2en.get(alarm.src_area)
            //         const dstName = country_cn2en.get(alarm.tar_area)

            //         const srcObj = locMap.get(srcName)
            //         const dstObj = locMap.get(dstName)

            //         if (srcObj && dstObj && srcObj !== dstObj) {
            //             return {
            //                 coords: [
            //                     [srcObj.longitude, srcObj.latitude],
            //                     [dstObj.longitude, dstObj.latitude]
            //                 ],
            //                 srcName,
            //                 dstName
            //             }
            //         } else {
            //             if (srcObj && srcObj !== dstObj) {
            //                 console.log(dstName)
            //             } else if (dstObj && srcObj !== dstObj) {
            //                 console.log(srcName)
            //             } else {
            //                 console.log(srcName, dstName)
            //             }
            //             return null
            //         }
            //     }).filter(alarm => !!alarm)

            //     console.log(linesData)
            //     this.optionWorld.series[1].data = linesData
            //     this.myChart.setOption(this.optionWorld)
            // }).catch((err) => console.log(err))

            // event topk
            this.getEventTopK()
            // alarm topk
            this.getAlarmTopK()

            this.optionChina = {
                title: [
                    {
                        text: '网络安全态势感知系统',
                        sublink: '#',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 26,
                            height: 100,
                            verticalAlign: 'bottom',
                            lineHeight: 60
                        }
                    },
                    {
                        text: 'Top-10 事件',
                        left: '5%',
                        bottom: '52%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 16
                        }
                    },
                    {
                        text: 'Top-10 攻击',
                        left: '5%',
                        bottom: '24%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 16
                        }
                    }
                ],
                graphic: {
                    id: 'renturn-btn',
                    type: 'circle',
                    shape: {
                        r: 20
                    },
                    style: {
                        text: '返回',
                        fill: '#eee'
                    },
                    left: 10,
                    top: 70,
                    onclick: () => {
                        this.optionChina.series[2].data = [];
                        this.optionChina.series[3].data = [];
                        this.myChart.setOption(this.optionWorld, true);
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.seriesName + '<br/>' + params.name + ' : ' + params.value;
                    }
                },
                backgroundColor: '#25499F',
                // color:legendColor,
                visualMap: {
                    show: false,
                    min: 0,
                    max: 100,
                    left: '10%',
                    bottom: '3%',
                    text: ['高', '低'],           // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                grid: [
                    {
                        left: '1%',
                        right: '80%',
                        top: '40%',
                        bottom: '30%',
                        containLabel: true
                    }, 
                    // 事件
                    {
                        left: '1%',
                        right: '85%',
                        top: '47%',
                        bottom: '30%',
                        containLabel: true
                    },
                    // 告警
                    {
                        left: '1%',
                        right: '85%',
                        top: '75%',
                        bottom: '4%',
                        containLabel: true
                    }
                ],
                xAxis: [
                    {
                        position: 'top',
                        gridIndex: 1,
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false
                        }
                    }, {
                        position: 'top',
                        // inverse: true,
                        gridIndex: 2,
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        name: '事件类型',
                        gridIndex: 1,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        inverse: true,
                        data: []
                    }, {
                        name: '告警类型',
                        gridIndex: 2,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        inverse: true,
                        // position: 'right',
                        data: []
                    }
                ],
                radar: [
                    {
                        indicator: [
                            {text: '威胁指数'},
                            {text: '基础指数'},
                            {text: '脆弱指数'},
                            {text: '综合指数'}
                        ],
                        center: ['85%', '20%'],
                        radius: '25%',
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'polygon',
                        name: {
                            formatter: function (value, indicator) {
                                return '【' + value + '】';
                            },
                            textStyle: {
                                color: '#72ACD1'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(114, 172, 209, 0.2)',
                                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '中国地图',
                        type: 'map',
                        // mapType: 'world',
                        // roam: true,
                        geoIndex: 0,
                        data: []
                    },
                    {
                        name: '指数雷达',
                        type: 'radar',
                        itemStyle: {
                            emphasis: {
                                // color: 各异,
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: [
                            {
                                value: [0, 0, 0],
                                name: '当前指数',
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: 'event-topk',
                        type: 'bar',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        tooltip: {
                            show: false,
                        },
                        itemStyle: {
                            normal: {
                                color: '#39a4da'
                            }
                        },
                        data: [],
                    },
                    {
                        name: 'alarm-topk',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#ad1717'
                            }
                        },
                        data: [],
                    }
                ],
                geo: {
                    map: 'china',
                    roam: true
                }
            };

            this.optionProvince = {
                title: [
                    {
                        text: '网络安全态势感知系统',
                        sublink: '#',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 26,
                            height: 100,
                            verticalAlign: 'bottom',
                            lineHeight: 60
                        }
                    },
                    {
                        text: 'Top-10 事件',
                        left: '5%',
                        bottom: '52%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 16
                        }
                    },
                    {
                        text: 'Top-10 攻击',
                        left: '5%',
                        bottom: '24%',
                        textStyle: {
                            color: '#ffffff',
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 16
                        }
                    }
                ],
                graphic: {
                    id: 'renturn-btn',
                    type: 'circle',
                    shape: {
                        r: 20
                    },
                    style: {
                        text: '返回',
                        fill: '#eee'
                    },
                    left: 10,
                    top: 70,
                    onclick: () => {
                        this.optionProvince.series[2].data = [];
                        this.optionProvince.series[3].data = [];
                        this.myChart.setOption(this.optionChina, true);
                    }
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 100,
                    left: '10%',
                    bottom: '3%',
                    text: ['高', '低'],           // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.seriesName + '<br/>' + params.name + ' : ' + params.value;
                    }
                },
                backgroundColor: '#25499F',
                grid: [
                    {
                        left: '1%',
                        right: '80%',
                        top: '40%',
                        bottom: '30%',
                        containLabel: true
                    },
                    // 事件
                     {
                        left: '1%',
                        right: '85%',
                        top: '47%',
                        bottom: '30%',
                        containLabel: true
                    },
                    // 告警
                     {
                        left: '1%',
                        right: '85%',
                        top: '75%',
                        bottom: '4%',
                        containLabel: true
                    }
                ],
                xAxis: [
                    {
                        position: 'top',
                        gridIndex: 1,
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false
                        }
                    }, {
                        position: 'top',
                        // inverse: true,
                        gridIndex: 2,
                        type: 'value',
                        boundaryGap: [0, 0.1],
                        axisLabel: {
                            show: false,
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        name: '事件类型',
                        gridIndex: 1,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        inverse: true,
                        data: []
                    }, {
                        name: '告警类型',
                        gridIndex: 2,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        inverse: true,
                        // position: 'right',
                        data: []
                    }
                ],
                radar: [
                    {
                        indicator: [
                            {text: '威胁指数'},
                            {text: '基础指数'},
                            {text: '脆弱指数'},
                            {text: '综合指数'}
                        ],
                        center: ['85%', '20%'],
                        radius: '25%',
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'polygon',
                        name: {
                            formatter: function (value, indicator) {
                                return '【' + value + '】';
                            },
                            textStyle: {
                                color: '#72ACD1'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(114, 172, 209, 0.2)',
                                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '省地图',
                        type: 'map',
                        geoIndex: 0,
                        data: []
                    },
                    {
                        name: '指数雷达',
                        type: 'radar',
                        itemStyle: {
                            emphasis: {
                                // color: 各异,
                                lineStyle: {
                                    width: 4
                                }
                            }
                        },
                        data: [
                            {
                                value: [0, 0, 0, 0],
                                name: '当前指数',
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(255, 255, 255, 0.5)'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        name: 'event-topk',
                        type: 'bar',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        tooltip: {
                            formatter: function (params) {
                                return params.data.name + '<br>' + params.value;
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#39a4da'
                            }
                        },
                        data: [],
                    },
                    {
                        name: 'alarm-topk',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#ad1717'
                            }
                        },
                        data: [],
                    }
                ],
                geo: {
                    map: '',
                    roam: true
                }
            }
        },
        created() {
            REGION.global.forEach(i => this.country_en2cn.set(i.en, i.cn))
        }
    }
</script>
