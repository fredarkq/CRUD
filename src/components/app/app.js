import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../eployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';



import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Petyovka I.", salary:800, increase: false, rise: true, id: 1},
                {name: "Baloga I.", salary:3000, increase: false, rise: false, id: 2},
                {name: "Fediv E.", salary:15000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

deleteItem = (zalupa) => {
    this.setState(({data}) => {

        return {
            data: data.filter(item => item.id !== zalupa)
        }
    })
    console.log(this.state.data);
}

addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    } 

    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            
            data: newArr
        }
    });
}

onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
        // const index = data.findIndex(elem => elem.id === id);

        // const old = data[index];
        // const newItem = {...old, increase: !old.increase};
        // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        // return{
        //     data: newArr
        // }


    // })

    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop] }
            }
            return item;
        })
    }))
}


    render () {
        
        return (
            <div className="app">
                <AppInfo
                data={this.state.data}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                onAdd={this.addItem}
                />
            </div>
        );
    }


}

export default App;