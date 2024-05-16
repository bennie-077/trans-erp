import "./Chart.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "September", income: "50000", expense: "24000" },
  { name: "October", income: "60000", expense: "18000" },
  { name: "November", income: "40000", expense: "21000" },
  { name: "December", income: "30000", expense: "28000" },
  { name: "January", income: "70000", expense: "34000" },
  { name: "February", income: "60000", expense: "14000" },
];
const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#83D475" />
          <Bar dataKey="expense" fill="#FF6B5E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
