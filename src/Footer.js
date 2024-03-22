import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    let currentYear = new Date().getFullYear();
    
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
      
                        <div className="col-lg-4 col-md-6">
                            <h3>My Technologies</h3>
                            <hr/>
                            <ul className="list-unstyled three-column">
                                <li>
                                    <Link to={`/ruby`}>{'Ruby'}</Link>
                                </li>
                                <li>
                                    <Link to={`/rails`}>{'Rails'}</Link>
                                </li>
                                <li>
                                    <Link to={`/reactjs`}>{'ReactJS'}</Link>
                                </li>
                                <li>
                                    <Link to={`/javascript`}>{'JavaScript'}</Link>
                                </li>
                                <li>
                                    <Link to={`/boostrap`}>{'Boostrap'}</Link>
                                </li>
                                <li>
                                    <Link to={`/postgresql`}>{'PostgreSQL'}</Link>
                                </li>
                                <li>
                                    <Link to={`/mysql`}>{'MySQL'}</Link>
                                </li>
                                <li>
                                    <Link to={`/html`}>{'HTML'}</Link>
                                </li>
                                <li>
                                    <Link to={`/css`}>{'CSS'}</Link>
                                </li>
                                <li>
                                    <Link to={`/java`}>{'Java'}</Link>
                                </li>
                                <li>
                                    <Link to={`/python`}>{'Python'}</Link>
                                </li>
                                <li>
                                    <Link to={`/github`}>{'github'}</Link>
                                </li>
                            </ul>
                            <ul className="list-unstyled three-column">
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://www.linkedin.com/"><i className="fa fa-linkedin mr-1"></i> LinkedIn</a>
                                </li>
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://github.com/allurianilkumar"><i className="fa fa-github mr-1"></i> Github</a>
                                </li>
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://www.youtube.com/@momcomputers" ><i className="fa fa-youtube mr-1"></i> YouTube</a>
                                </li>
                            </ul>
                            <ul className="list-unstyled socila-list">
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                            </ul>
                            <ul className="list-unstyled socila-list">
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                            </ul>
                             <ul className="list-unstyled socila-list">
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                            </ul>
                        </div>
      
                        <div className="col-lg-4 col-md-6">
                            <h3>My Latest Articles</h3>
                            <hr/>
                            <div className="media">
                                <Link to={`/javascript`} className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Programming</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
        
                            <div className="media">
                                <Link to={`/javascript`} className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Programming</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
        
                            <div className="media">
                                <Link to={`/javascript`} className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Programming</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                             <div className="media">
                                <Link to={`/javascript`} className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Programming</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
      
                        <div className="col-lg-4 workexperience">
                            <h3>My Work Experience</h3>
                            <hr/>
                            <Link to={`/javascript`}>
                                <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            </Link>
                            <Link to={`/javascript`}>
                                <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            </Link>
                            <Link to={`/javascript`}>
                                <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            </Link>
                            <Link to={`/javascript`}>
                                <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            </Link>
                            <hr />
                            <h3>My Personal Experience</h3>
                            <Link to={`/javascript`}>
                                <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            </Link>
                            <Link to={`/javascript`}>
                                <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center">
                    Copyright &copy; {currentYear} <span>Alluri Anil Kumar</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
