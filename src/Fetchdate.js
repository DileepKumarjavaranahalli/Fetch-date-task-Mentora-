import React, { Component } from "react";
const empsApiData = [
    {
        id: '1',
        name: 'Dileep',
        createdAt: 1610378858273

    },
    {
        id: '21',
        name: 'Kumar',
        createdAt: 1610378858273


    },
    {
        id: '33',
        name: 'Dileep1',
        createdAt: 1610378858273

    },
    {
        id: '2',
        name: 'Kumar1',

    }
];
class Fetchdate extends Component {


    constructor(props) {
        console.log('kiran ', empsApiData)
        super(props);
        const newEmps = empsApiData.map((emp) => ({
            "id": emp.id,
            "name": emp.name,
            "createdAt": new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(emp.createdAt)
        }));
        this.state = {
            emps: newEmps
        }
    }



    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.emps.map((item, index) => (
                        <li key={item.id}>
                            <span>{item.name}  </span>
                            <span>{item.createdAt}  </span>


                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Fetchdate;