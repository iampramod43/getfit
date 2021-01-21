import React, { useState } from 'react'
import './Middlebar.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { IconButton } from '@material-ui/core';
function Middlebar() {

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return (
        <div className="middlebar">
            <div className="middlebar__addCategory">
                <h3>Add Category</h3>
            </div>
            <div className="middlebar__filter">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="cccc, L LLL"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
            </div>
            <div className="middlebar__categories">
                <div className="middlebar__cat">
                    <div className="middlebar__left">
                        <div className="middlebar__protein">58.5</div>
                        <div className="middlebar__fats">10</div>
                        <div className="middlebar__carbs">25.2</div>
                        <div className="middlebar__fiber">8</div>
                    </div>
                    <div className="middlebar__middle">
                        <p className="middlebar__title">Lunch</p>
                        <p className="middlebar__products">Added 4 products</p>
                        <p className="middlebar__cal">423 kcal</p>
                    </div>
                    <div className="middlebar__right">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="middlebar__cat">
                <div className="middlebar__left">
                        <div className="middlebar__protein">58.5</div>
                        <div className="middlebar__fats">10</div>
                        <div className="middlebar__carbs">25.2</div>
                        <div className="middlebar__fiber">8</div>
                    </div>
                    <div className="middlebar__middle">
                        <p className="middlebar__title">Lunch</p>
                        <p className="middlebar__products">Added 4 products</p>
                        <p className="middlebar__cal">423 kcal</p>
                    </div>
                    <div className="middlebar__right">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="middlebar__cat">
                <div className="middlebar__left">
                        <div className="middlebar__protein">58.5</div>
                        <div className="middlebar__fats">10</div>
                        <div className="middlebar__carbs">25.2</div>
                        <div className="middlebar__fiber">8</div>
                    </div>
                    <div className="middlebar__middle">
                        <p className="middlebar__title">Lunch</p>
                        <p className="middlebar__products">Added 4 products</p>
                        <p className="middlebar__cal">423 kcal</p>
                    </div>
                    <div className="middlebar__right">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="middlebar__cat">
                <div className="middlebar__left">
                        <div className="middlebar__protein">58.5</div>
                        <div className="middlebar__fats">10</div>
                        <div className="middlebar__carbs">25.2</div>
                        <div className="middlebar__fiber">8</div>
                    </div>
                    <div className="middlebar__middle">
                        <p className="middlebar__title">Lunch</p>
                        <p className="middlebar__products">Added 4 products</p>
                        <p className="middlebar__cal">423 kcal</p>
                    </div>
                    <div className="middlebar__right">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="middlebar__cat">
                <div className="middlebar__left">
                        <div className="middlebar__protein">58.5</div>
                        <div className="middlebar__fats">10</div>
                        <div className="middlebar__carbs">25.2</div>
                        <div className="middlebar__fiber">8</div>
                    </div>
                    <div className="middlebar__middle">
                        <p className="middlebar__title">Lunch</p>
                        <p className="middlebar__products">Added 4 products</p>
                        <p className="middlebar__cal">423 kcal</p>
                    </div>
                    <div className="middlebar__right">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="middlebar__cat">
                <div className="middlebar__left">
                        <div className="middlebar__protein">58.5</div>
                        <div className="middlebar__fats">10</div>
                        <div className="middlebar__carbs">25.2</div>
                        <div className="middlebar__fiber">8</div>
                    </div>
                    <div className="middlebar__middle">
                        <p className="middlebar__title">Lunch</p>
                        <p className="middlebar__products">Added 4 products</p>
                        <p className="middlebar__cal">423 kcal</p>
                    </div>
                    <div className="middlebar__right">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middlebar
