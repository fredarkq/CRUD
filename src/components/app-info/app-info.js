
import './app-info.css'

const AppInfo = (props) => {
    const {data} = props
    const incTotal = data.filter(item => item.increase).length
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании №</h1>
            <h2>Общее число сотрудников: {data.length} </h2>
            <h2>Премию получат:{incTotal} </h2>
        </div>
    )
}

export default AppInfo;