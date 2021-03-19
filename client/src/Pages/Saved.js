import React, { useState, useEffect } from "react";
import Header from '../Components/Header';
import Result from '../Components/Result';
import { Container } from '../Components/Grid';
import API from "../Utils/API";

function Saved() {
    const [pros, setPros] = useState([])

    useEffect(() => {
        showSaved()
    }, [])

    function showSaved() {
        API.getPros()
            .then(res => {
                setPros(res.data)
            }
            )
            .catch(err => console.log(err));
    }


    return (
        <div>
            <Header headerText="Below are the saved Pros!  Click on the Search link at the top to begin searching for more Pros!"/>
            <Container classes="mt-5">
                {pros.length ? (
                    <div>
                        <h3>Saved Pros:</h3>
                        {pros.map(pro => {
                            return (
                                <Result 
                                    key={pro._id}
                                    id={pro._id}
                                    company={pro.servicePro_companyName}
                                    website={pro.servicePro_url}
                                    category={pro.servicePro_category}
                                    image={pro.servicePro_profileImg}
                                    phone={pro.servicePro_phone}
                                    searched="no"
                                    forBtn={handleDelete}
                                />
                                )
                        })}
                    </div>
                ) : (
                <h3>Saved Pros:</h3>
                )}
            </Container>
        </div>
    )
}

export default Saved;