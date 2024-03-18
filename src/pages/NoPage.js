import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NoPage = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:404 Error");
    return (<h1> 404 Page, File not found.</h1>);
}

export default NoPage;