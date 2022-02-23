import React from 'react'
import NavBar from '../layout/NavBar'
import "./SubmitBook.css"
import formGirl from "../img/Reading Book 03 (1).png"
import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
function SubmitBook() {
    const history = useHistory();

    const enteredTitleRef = useRef();
    const enteredAuthorRef = useRef();
    const enteredGenreRef = useRef();
    const enteredCoverRef = useRef();
    function test(event) {
        event.preventDefault();
        const enteredTitle = enteredTitleRef.current.value
        const enteredAuthor = enteredAuthorRef.current.value
        const enteredGenre = enteredGenreRef.current.value
        const enteredCover = enteredCoverRef.current.value
        const element = {
            title: enteredTitle,
            author: enteredAuthor,
            genre: enteredGenre,
            cover: enteredCover
        }
        console.log(element)
        fetch('https://bookstore-e5f49-default-rtdb.firebaseio.com/books.json', {
            method: 'POST',
            body: JSON.stringify(element),
            header: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            alert("Thank you for your submission! \nYou will see your submitted book at the bottom of the catalogue page.")
            history.replace('/catalogue');
        });
    }
    return (
        <div className="submitFirstDiv">
            <div className="submitOpacityDiv">

                <div className="submitBookMainDiv">
                    <div className="submitBookSecondDiv">
                        <div className="SubmitMainText">
                            <h3>Help grow this Catalogue by submitting a book.</h3>
                        </div>
                        <div className="SubmitBookForm">
                            <form action="" onSubmit={test} autocomplete="off">
                                <div className="formItem">
                                    <label htmlFor="bookTitle">Title</label>
                                    <input type="text" id="bookTitle" ref={enteredTitleRef} maxLength="50" minLength="2" required />
                                </div>
                                <div className="formItem">
                                    <label htmlFor="bookAuthor">Author</label>
                                    <input type="text" id="bookAuthor" ref={enteredAuthorRef} maxLength="40" minLength="2" required />
                                </div>
                                <div className="formItem">
                                    <label htmlFor="bookGenre">Genre</label>
                                    <select id="bookGenre" ref={enteredGenreRef} required>
                                        {/* <option disabled selected>Select an option</option> */}
                                        <option value="journalism" selected>Journalism</option>
                                        <option value="classic">Classics</option>
                                        <option value="comic">Comic</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="fiction">Fiction</option>
                                        <option value="Stories">Stories</option>
                                        <option value="politics">Politics</option>
                                        <option value="science">Science</option>
                                    </select>
                                </div>
                                <div className="formItem">
                                    <label htmlFor="bookCover">Book cover link</label>
                                    <input type="url" id="bookCover" ref={enteredCoverRef} required />
                                </div>
                                <div className="formSubmit">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="lowerTextSubmission">
                            <p>The submitted Book will be sent to a database, fetched and displayed instantly in the Catalogue.</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default SubmitBook
