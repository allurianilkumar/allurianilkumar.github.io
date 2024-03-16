import React from 'react';
import './footer.css';
const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
      
                <div className="col-lg-4 col-md-6">
                    <h3>Site Map</h3>
                    <ul className="list-unstyled three-column">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Code</li>
                        <li>Design</li>
                        <li>Host</li>
                        <li>Contact</li>
                        <li>Company</li>
                    </ul>
                    <ul className="list-unstyled socila-list">
                        <li><img src="http://placehold.it/48x48" alt="" /></li>
                        <li><img src="http://placehold.it/48x48" alt="" /></li>
                        <li><img src="http://placehold.it/48x48" alt="" /></li>
                        <li><img src="http://placehold.it/48x48" alt="" /></li>
                        <li><img src="http://placehold.it/48x48" alt="" /></li>
                        <li><img src="http://placehold.it/48x48" alt="" /></li>
                    </ul>
                    <ul className="list-group">
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://www.linkedin.com/"><i className="fa fa-linkedin mr-1"></i> LinkedIn</a>
                        </li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2"> 
                            <a href="https://www.reddit.com"><i className="fa fa-reddit mr-1"></i> Reddit</a>
                        </li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://plus.google.com/" >
                                <i className="fa fa-google-plus mr-1"></i> Google+
                            </a>
                        </li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://github.com/allurianilkumar"><i className="fa fa-github mr-1"></i> Github</a>  
                        </li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://blog.naologic.com" ><i className="fa fa-medium mr-1"></i> Medium</a>
                        </li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://www.facebook.com/" ><i className="fa fa-facebook mr-1"></i> Facebook</a>
                        </li>
                        <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                            <a href="https://www.youtube.com/channel/momcomputers" ><i className="fa fa-youtube mr-1"></i> YouTube</a>
                        </li>
                    </ul>
                </div>
      
                <div className="col-lg-4 col-md-6">
                    <h3>latest Articles</h3>
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
        
                </div>
      
                <div className="col-lg-4">
                    <h3>Our Work</h3>
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <h3>Our Work</h3>
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                    <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                </div>
            </div>
        </div>
        <div className="copyright text-center">
            Copyright &copy; 2024 <span>Alluri Anil Kumar</span>
        </div>
    </footer>
);

export default Footer;
