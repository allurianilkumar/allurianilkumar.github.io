import React from 'react';
import './footer.css';
const Footer = () => {
    let currentYear = new Date().getFullYear();
    
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
      
                        <div className="col-lg-4 col-md-6">
                            <h3>My Programming</h3>
                            <ul className="list-unstyled three-column">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Ruby</li>
                                <li>Rails</li>
                                <li>React Js</li>
                                <li>JavaScript</li>
                                <li>MySQL</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <ul className="list-unstyled three-column">
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://www.linkedin.com/"><i className="fa fa-linkedin mr-1"></i> LinkedIn</a>
                                </li>
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://github.com/allurianilkumar"><i className="fa fa-github mr-1"></i> Github</a>
                                </li>

                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://www.youtube.com/channel/momcomputers" ><i className="fa fa-youtube mr-1"></i> YouTube</a>
                                </li>
                            </ul>
                            <ul className="list-unstyled socila-list">
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
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
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                            </ul>
                             <ul className="list-unstyled socila-list">
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
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
                                <li><img src="http://placehold.it/48x48" alt="" /></li>
                            </ul>
                        </div>
      
                        <div className="col-lg-4 col-md-6">
                            <h3>Latest Assignments</h3>
                            <div className="media">
                                <a href="a1" className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Programming</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
        
                            <div className="media">
                                <a href="a2" className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Coding</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
        
                            <div className="media">
                                <a href="a3" className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Web Sesign</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                             <div className="media">
                                <a href="a3" className="pull-left">
                                    <img src="http://placehold.it/64x64" alt="" className="media-object" />
                                </a>
                                <div className="media-body">
                                    <h4 className="media-heading">Web Sesign</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
        
                        </div>
      
                        <div className="col-lg-4">
                            <h3>Work Experience</h3>
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
                            <img className="img-thumbnail" src="http://placehold.it/140x90" alt="" />
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
