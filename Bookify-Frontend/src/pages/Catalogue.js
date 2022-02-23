import React from 'react'
import './Catalogue.css'
import BookCard from '../components/BookCard'
import { useState } from 'react'
import { useEffect } from 'react'
import NavBar from '../layout/NavBar'

function Catalogue({cartData, setCartData}) {
    const [IsLoading, setIsLoading] = useState(true)
    const [FetchedData, setFetchedData] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch('https://bookstore-e5f49-default-rtdb.firebaseio.com/books.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const books = [];
            for (const keys in data) {
                const book = {
                    ...data[keys]
                };
                books.push(book)
            }
            setIsLoading(false);
            setFetchedData(books)
        })
    }, [])

    const [genre, setGenre] = useState("");

    let filteredData = FetchedData.filter(data => data == data)
    if (genre != "") {
        filteredData = FetchedData.filter(data => (data.genre == genre))
    }

    return (
        <div className="mainCatalogueDiv">
            <div className="LoweringCatalogueOpacity">
                <div className="secondCatalogueDiv">
                    <div className="sidePannel">
                        <div className="insideSidePannel">
                            <div className="genreText">
                                <h3>Genres</h3>
                            </div>
                            <hr class="sideCataloguePanelLine" />
                            <div className="genresDiv">
                                <div className="genre">
                                    <label><input type="radio" id="All" name="radioBtns" onChange={() => setGenre("")} />All</label>
                                </div>
                                <div className="journalism genre">
                                    <label ><input type="radio" id="Journalism" name="radioBtns" onChange={() => setGenre("journalism")} />Journalism</label>
                                </div>
                                <div className="classics genre">
                                    <label><input type="radio" id="classic" name="radioBtns" onChange={() => setGenre("classic")} />Classics</label>
                                </div>
                                <div className="Comics genre">
                                    <label><input type="radio" id="Comic" name="radioBtns" onChange={() => setGenre("comic")} />Comic</label>
                                </div>
                                <div className="Fantasies genre">
                                    <label><input type="radio" id="Fantasy" name="radioBtns" onChange={() => setGenre("fantasy")} />Fantasy</label>
                                </div>
                                <div className="Fictions genre">
                                    <label><input type="radio" id="Fiction" name="radioBtns" onChange={() => setGenre("fiction")} />Fiction</label>
                                </div>
                                <div className="stories genre">
                                    <label><input type="radio" id="Story" name="radioBtns" onChange={() => setGenre("story")} />Stories</label>
                                </div>
                                <div className="Politics genre">
                                    <label><input type="radio" id="politics" name="radioBtns" onChange={() => setGenre("politics")} />Politics</label>
                                </div>
                                <div className="Science genre">
                                    <label><input type="radio" id="science" name="radioBtns" onChange={() => setGenre("science")} />Science</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mainPannel">
                        <div className="bookCards">
                            {filteredData.map(book => (
                                <BookCard
                                    title={book.title}
                                    author={book.author}
                                    cover={book.cover}
                                    setCartData={setCartData}
                                    genre = {book.genre}
                                    cartData={cartData}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Catalogue
