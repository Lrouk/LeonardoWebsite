import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './Dat.css';
import 'react-datepicker/dist/react-datepicker.css';
import { PropagateLoader } from 'react-spinners';


function Dat() {
    const [loading, setLoading] = useState(false);
    const [selectedDateText, setSelectedDateText] = useState('Select Date');
    const [selectedTimeText, setSelectedTimeText] = useState('Select Time'); // New state variable for time text
    const [showPopup, setShowPopup] = useState(false);
    const [guestName, setGuestName] = useState('');
    const [guestNameError, setGuestNameError] = useState('');
    const [reserveClicked, setReserveClicked] = useState(false); // New state variable
    const [selectedDate, setSelectedDate] = useState();
    const [selectedDiners, setSelectedDiners] = useState('');
    const guestNameRef = useRef(null);
    const [selectedTime, setSelectedTime] = useState(() => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 30);
        const roundedMinutes = Math.round(now.getMinutes() / 30) * 30;
        now.setMinutes(roundedMinutes);
        return now;
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedDateText(date.toLocaleDateString());
    };

    useEffect(() => {
        localStorage.setItem('reserveClicked', JSON.stringify(reserveClicked));
    }, [reserveClicked]);

    useEffect(() => {
        const storedReserveClicked = localStorage.getItem('reserveClicked');
        if (storedReserveClicked) {
            setReserveClicked(JSON.parse(storedReserveClicked));
        }
    }, []);

    const handlePopup = () => {
        let nameError = '';
        let reserveClicked = true;

        if (guestName.length < 2) {
            nameError = 'Guest name should be at least 2 characters long';
        } else if (selectedDiners === '') {
            nameError = 'Please select the number of diners';
        } else if (!selectedDate) {
            nameError = 'Please select a date';
        } else if (!selectedTime) {
            nameError = 'Please select a time';
        } else if (/\d/.test(guestName)) {
            nameError = 'Guest name should not contain numbers';
        } else if (/[^\w\s]/.test(guestName)) {
            nameError = 'Guest name should not contain special characters';
        }

        if (nameError === '') {
            setLoading(true); // Enable loading state
            setTimeout(() => {
                setShowPopup(!showPopup);
                document.body.style.overflow = showPopup ? 'auto' : 'hidden'; // Toggle site scrolling
                setLoading(false); // Disable loading state after a delay (simulating an asynchronous operation)
            }, 3000); // Delay the popup toggle for 2 seconds (adjust this value as needed)
        }
        setGuestNameError(nameError);
        setReserveClicked(reserveClicked);
    };

    const handleGuestNameChange = (event) => {
        const inputValue = event.target.value;
        const hasNumbers = /\d/.test(inputValue);
        const hasSpecialChars = /[^\w\s]/.test(inputValue);
        const hasNonEnglishChars = /[^\p{L}]/u.test(inputValue);
        let error = '';

        if (hasNumbers) {
            error = 'Guest nawme should not contain numbers';
        } else if (hasSpecialChars) {
            error = 'Guest name should not contain special characters';
        } else if (hasNonEnglishChars) {
            error = 'Please write your name in English only';
        }
        setGuestName(inputValue);
        setGuestNameError(error);
    };

    const handleClosePopup = () => {
        setSelectedDiners('');
        setGuestName('');
        setSelectedDate(null); // Clear the selected date
        setSelectedTime(null); // Clear the selected time
        setSelectedDateText('Select Date'); // Reset the selected date text
        setSelectedTimeText('Select Time'); // Reset the selected time text
        setShowPopup(false);
        document.body.style.overflow = 'auto'; // Enable site scrolling
        if (guestNameRef.current) {
            guestNameRef.current.value = '';
        }
    };

    return (
        <div className="app__reservation section__padding" id="book">
            <div className="app__specialMenu-title1">
                <h1 className="headtext__cormorant">- Make a reservation</h1>
            </div>
            <div className="app__specialMenu-menu">
                {/* Select number of diners */}
                <div className="app__specialMenu-menu_items">
                    <div className="app__reservation_diners">
                        <p className="app__title_heading-diners"></p>
                        <div className="app__reservation_items">
                            <select className="app__select" id="diners" value={selectedDiners} onChange={(e) => setSelectedDiners(parseInt(e.target.value))}>
                                <option value="" hidden>
                                    Number of Diners
                                </option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Select Guest name */}
                <div className="app__specialMenu-menu_items">
                    <div className="app__reservation_input">
                        <p className="app__title_heading"></p>
                        <div className="app__reservation_items">
                            <input
                                className="app__inputGuestName"
                                placeholder="Enter Your Name"
                                type="text"
                                name="name"
                                defaultValue={guestName}
                                onChange={handleGuestNameChange}
                                ref={guestNameRef}
                            />
                        </div>
                    </div>
                </div>

                {/* Select date */}
                <div className="app__specialMenu-menu_items">
                    <div className="app__reservation_date">
                        <p className="app__title_heading"></p>
                        <div className="app__reservation_items">
                            <DatePicker
                                className="react-datepicker"
                                onChange={handleDateChange}
                                dateFormat="dd-MM-yyyy"
                                minDate={new Date()}
                                placeholderText={selectedDateText}
                            />
                        </div>
                    </div>
                </div>

                {/* Select time */}
                <div className="app__specialMenu-menu_items">
                    <div className="app__reservation_time">
                        <p className="app__title_heading"></p>
                        <div className="app__reservation_items">
                            <DatePicker
                                placeholderText={selectedTimeText}
                                onChange={(time) => {
                                    setSelectedTime(time);
                                    setSelectedTimeText(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })); // Update the selected time text
                                }}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                className="react-datepicker-time"
                                minTime={new Date().setHours(19, 0, 0)} // Set minimum time to 8pm
                                maxTime={new Date().setHours(23, 59, 59)} // Set maximum time to 11:59pm
                                openToDate={selectedTime}
                            />
                        </div>
                    </div>
                </div>

                <div className="app__specialMenu-menu_items">
                    <div className="app__reservation_Button">
                        <div className="app__reservationButton_button">
                            <button type="button" className="custom__button" onClick={handlePopup}>
                                {loading ? ( // Show Spinners if loading is true
                                    <PropagateLoader color="var(--color-red)" />

                                ) : (
                                    'Reserve'
                                )}
                            </button>
                            {showPopup && (
                                <div className="popup">
                                    <div className="popup-content">
                                        <div>
                                            <h2>Thank you for your reservation</h2>
                                            <p>
                                                Your table is reserved for {selectedDate.toLocaleDateString()} at{' '}
                                                {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} for {selectedDiners} diners.
                                            </p>
                                            <p>We look forward to seeing you soon!</p>
                                        </div>
                                        <button type="button" className="custom__button" onClick={handleClosePopup}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>{guestNameError && <p className="app__error" style={{ color: 'red' }}>{guestNameError}</p>}</div>
        </div>
    );
}

export default Dat;