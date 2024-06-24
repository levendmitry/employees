
import './header-info.css'; 

const HeaderInfo = ({employeesCount, increaseCount}) => {
    return (
        <div className="header-info">
            <h1>Учет сотрудников</h1>
            <h2>Общее число сотрудников: {employeesCount()}</h2>
            <h2>Премию получат: {increaseCount()}</h2>
        </div>
    )
}

export default HeaderInfo;