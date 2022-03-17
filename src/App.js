import "./styles.css";

import { Table, Form, Input, Select } from "antd";

let ips = {
  tp: "188.134.65.67",
  data: "94.26.139.111"
};
// let ip = Object.values(ips).map((i, k, o) => i.ip);

// let list = (ctx) => ({ ips, ip });

console.log(ips.tp);
// let row = (item) => <td>{item}</td>;
let row = (item) => (
  <tr>
    <div>
      <input defaultValue={item} />
    </div>
    <td>{type}</td>
  </tr>
);

let keys = (i) => {
  for (const v in i) {
    if (i.hasOwnProperty(v)) {
      const d = i[v];
      return <input defaultValue={d} />;
    }
  }
};

let data = ips;
let dataSource = Object.values(data).map((i, k) => {
  let { uno, type } = i;

  // let dd = Object.values(i).map((v) => <div>{v}</div>);
  let item = (
    <div>
      <input type={"text"} name={"key"} defaultValue={"1221321"} />

      <input type={"text"} name={"ip"} defaultValue={i} />
      <button>Edit</button>
    </div>
  );
  return item;
});
console.log(dataSource);
export default function App() {
  return (
    <div className="App">
      <div>IP</div>
      <form>
        <div>{dataSource}</div>
      </form>
    </div>
  );
}
