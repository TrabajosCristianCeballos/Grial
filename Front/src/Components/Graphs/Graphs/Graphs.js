import React, {Component} from "react";
import BarChart from "recharts/lib/chart/BarChart";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Tooltip from "@material-ui/core/Tooltip";
import Legend from "recharts/lib/component/Legend";
import Bar from "recharts/lib/cartesian/Bar";
import Table from "react-bootstrap/Table";
class Graphs extends Component{
    constructor(props){
        super(props);
        this.state = {
            AllProducts: []
        };
        this.getAllProducts = this.getAllProducts.bind(this);
        this.getAllProducts();
    }

    getAllProducts(){
        fetch('http://localhost:8080/products/test')
            .then(response => response.json())
            .then(data => {this.setState({ AllProducts: data });
                console.log(data)});
    }

    render() {
        const {AllProducts} = this.state;
        let tableArray = [];
        for(let key in AllProducts){
            tableArray.push(
                <tr key={AllProducts[key].id}>
                    <td>
                        <p className={"mb-0"}>
                            {AllProducts[key].name}
                        </p>
                    </td>
                    <td>
                        <p className={"mb-0"}>
                            {AllProducts[key].price}
                        </p>
                    </td>
                    <td>
                        <p className={"mb-0"}>{AllProducts[key].comments}</p>
                    </td>
                </tr>
            );
        }
        return (
            <div className={"card"}>
                <div className="card-body" style={{padding: "250px"}}>
                    <div>
                        <BarChart width={730} height={250} data={AllProducts}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="#8884d8" />
                            <Bar dataKey="isGood" fill="#8764d8" />
                        </BarChart>
                        <br />
                        <div>
                            <Table responsive striped bordered={true} hover={true}>
                                <thead>
                                <tr>
                                    <th className={"cursorPointer"}>Name</th>
                                    <th className={"cursorPointer"}>Price </th>
                                    <th className={"cursorPointer"}>Comments</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tableArray}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Graphs;