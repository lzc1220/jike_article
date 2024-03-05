import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

//柱状图组件
const BarChart = (props) => {
    //保证dom可用，然后才进行图标的渲染
    const charRef = useRef(null)
    useEffect(()=>{
        //获取要渲染图标的dom节点
        var chartDom = charRef.current

        //初始化
        var myChart = echarts.init(chartDom);
        var option;

        //准备图标参数
        option = {
            title: {
                text: props.title
            },
            xAxis: {
                type: 'category',
                data: props.name
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: props.value,
                type: 'bar'
                }
            ]
        };
        //使用图标参数完成图标渲染
        option && myChart.setOption(option);
    }, [])
    return <div ref={charRef} style={{width:'500px', height:'400px'}}></div>
}

export default BarChart