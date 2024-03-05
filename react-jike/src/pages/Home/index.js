import BarChart from "./components/BarChart"

const Home = () => {
    return(
         <div>
        <BarChart title={'我是标题1'} 
                  name={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                  value={[120, 200, 150, 80, 70, 110, 130]}
                  />
        <BarChart title={'我是标题2'} 
                  name={['吃饭','睡觉','打豆豆']}
                  value={[25, 25, 50]}
                  />
        </div>
    )
}

export default Home