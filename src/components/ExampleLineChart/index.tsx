import styles from "./styles.module.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 2210, amt: 2290 },
    { name: 'Page C', uv: 200, pv: 2290, amt: 2000 },
    { name: 'Page D', uv: 278, pv: 2000, amt: 2181 },
    { name: 'Page E', uv: 189, pv: 2181, amt: 2500 },
    { name: 'Page F', uv: 239, pv: 2500, amt: 2100 },
    { name: 'Page G', uv: 349, pv: 2100, amt: 2300 }
];

export function ExampleLineChart() {
    return (
        <>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}