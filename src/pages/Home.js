// Home.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Home");
    return (<h1>Home:</h1>);
}

export default Home;
