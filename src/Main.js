import React from 'react'
import './Main.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';
const columns = [
    { field: 'Product', headerName: 'Product', width: 200 },
    { field: 'Amount', headerName: 'Amount', width: 150 },
    { field: 'kcal', headerName: 'kcal', width: 100 },
    { field: 'Protein', headerName: 'Protein', width: 100 },
    { field: 'Carbs', headerName: 'Carbs', width: 100 },
    { field: 'Fats', headerName: 'Fats', width: 100 },
    { field: 'Fiber', headerName: 'Fiber', width: 100 },

    
  ];
  
  const rows = [
    { id: 1, Product: 'Egg', Amount: 4, kcal: 134, Protein: 23, Carbs: 34, Fats: 12, Fiber: 34 },
    { id: 2, Product: 'Egg', Amount: 4, kcal: 134, Protein: 23, Carbs: 34, Fats: 12, Fiber: 34 },
    { id: 3, Product: 'Egg', Amount: 4, kcal: 134, Protein: 23, Carbs: 34, Fats: 12, Fiber: 34 },
    { id: 4, Product: 'Egg', Amount: 4, kcal: 134, Protein: 23, Carbs: 34, Fats: 12, Fiber: 34 },
    { id: 5, Product: 'Egg', Amount: 4, kcal: 134, Protein: 23, Carbs: 34, Fats: 12, Fiber: 34 },

];
function Main() {
    return (
        <div className="main">
            <div className="main__header">
                <div className="main__headerLeft">
                    Your Summary So Far
                </div>
                <div className="main__headerRight">
                    <div className="main__cal">
                        <h4>kcal</h4>
                        <p className="main__count">545</p>
                    </div>
                    <div className="main__date">
                        <h4>Date</h4>
                        <p className="main__count">21/1/21</p>
                    </div>
                </div>
            </div>
            <div className="main__actions">
                <div className="main__actionsLeft">
                    <div className="main__actionDelete">
                        <DeleteOutlineIcon />
                    </div>
                    <div className="main__actionSave">
                        Save Meal
                    </div>
                </div>
                <div className="main__actionsRight">
                    <div className="main__actionSaved">
                        <LocalDiningIcon />
                        <p>Saved Meals</p>
                        <ExpandMoreIcon />
                    </div>
                </div>
            </div>
            <div className="main__table">
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </div>
    )
}

export default Main
