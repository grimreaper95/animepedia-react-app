import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {searchAnimeThunk} from "../../services/anime-search-thunk";
import { Card, Row, Col, Container } from "react-bootstrap";
import {resetSearch} from "../../reducers/anime-search-reducer";
import {hideRandomAnime} from "../../reducers/random-anime-reducer";
import {randomAnimeThunk} from "../../services/random-anime-thunk";
import APP_URL from "../../constants";
import {Link} from "react-router-dom";

const AnimeSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {searchAnimeList} = useSelector((state) => state.animeSearch)
    const dispatch = useDispatch()
    return (
        <>
            <div className="row mx-auto">
                <div className="col-11">
                    <input placeholder="Search any anime here!"
                           className="form-control "
                           onChange={(e) => {
                               if (e.target.value === '') {
                                   dispatch(resetSearch());
                                   dispatch(randomAnimeThunk())
                               }
                               setSearchQuery(e.target.value)
                           }}
                           value={searchQuery}/>
                </div>

                <div className="col-1 float-end">
                    <button
                            className="btn btn-dark "
                            onClick={() => {
                                dispatch(hideRandomAnime())
                                dispatch(searchAnimeThunk(searchQuery))
                            }}>
                        Search
                    </button>
                </div>
            </div>

                <div className="d-flex justify-content-end mt-5">
                    <Row>
                        {
                            (searchQuery!=='') && searchAnimeList && searchAnimeList.map((anime, a) =>
                            <Col key={a} xs={12} md={4} lg={3} sm={6}>
                                <Card className="shadow p-0 mb-5 bg-white rounded">
                                    <Card.Img src={anime.images.jpg.image_url} />
                                    <Card.Body>

                                        <Link to={'/detail/' + anime.mal_id}  className="stretched-link" >
                                            <Card.Title>{anime.title}</Card.Title>
                                        </Link>
                                        <Card.Text>{anime.synopsis?.substring(0, 100)} {anime.synopsis?.length >= 200 && '...'}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>

            {/*}*/}
        </>
    )
}

export default AnimeSearch