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
                                    <a href="https://www.npmjs.com/~anilkumaralluri"><img src="npm.png" style={{ width:"20%",height:"20%",color: "white"}} />NPM</a>
                                </li>
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://github.com/allurianilkumar"><i className="fa fa-github mr-1"></i> Github</a>
                                </li>
                                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                    <a href="https://www.youtube.com/@momcomputers" ><i className="fa fa-youtube mr-1"></i> YouTube</a>
                                </li>
                            </ul>
                            <ul className="list-unstyled socila-list">
                                <li><img src="ruby.png" alt="Ruby" title="Ruby"/></li>
                                <li><img src="https://img.icons8.com/?size=48&id=12eMo7h5rCTp&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=9nLaR5KFGjN0&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=22813&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=cvzmaEA4kC0o&format=png" alt="" /></li>
                            </ul>
                            <ul className="list-unstyled socila-list">
                                <li><img src="https://img.icons8.com/?size=40&id=Nlsua06Gvxel&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=EzPCiQUqWWEa&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=20909&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=21278&format=png" alt="" /></li>
                            </ul>
                             <ul className="list-unstyled socila-list">
                                <li><img src="https://img.icons8.com/?size=48&id=VOnRj9vGpXV8&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=13679&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=13441&format=png" alt="" /></li>    
                                <li><img src="https://img.icons8.com/?size=48&id=YrKoPXb4jv9l&format=png" alt="" /></li>
                                <li><img src="https://img.icons8.com/?size=48&id=zehXPLJSAbBB&format=png" alt="" /></li>
                            </ul>
                        </div>
      
                        <div className="col-lg-4 col-md-6">
                            <h3>My Videos/Articles</h3>
                            <hr/>
                            <div className="media">
                                <Link to={`https://www.youtube.com/watch?v=kaiLKP_RtgA&t=3s`} className="pull-left">
                                    <img src="https://i.ytimg.com/vi/kaiLKP_RtgA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ7WNtYIXYtJLefW8xmOxraIRlOQ" alt="" className="media-object" style={{ width: "64px", height: "64px" }} />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Sidekiq Basics</h4>
                                    <p>Sidekiq is a Ruby framework to perform background jobs. It is an open-source job scheduler written in Ruby that is very useful for handling</p>
                                </div>
                            </div>
        
                            <div className="media">
                                <Link to={`https://www.youtube.com/watch?v=OXOkNcrkhiM`} className="pull-left">
                                    <img src="https://i.ytimg.com/vi/OXOkNcrkhiM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPl2cFIfVL1k8NZXKwv7AFfFOs9A" alt="" className="media-object" style={{ width: "64px", height: "64px" }} />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Rakefile vs .rake file</h4>
                                    <p>Rake is a popular task runner for Ruby and Rails applications.</p>
                                </div>
                            </div>
        
                            <div className="media">
                                <Link to={`https://www.youtube.com/watch?v=Elah4XXdMZM&t=4s`} className="pull-left">
                                    <img src="https://i.ytimg.com/vi/Elah4XXdMZM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlPc5vrSehcd9y7hGblcwA7fVPeA" alt="" className="media-object" style={{ width: "64px", height: "64px" }} />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Savepoints in ROR</h4>
                                    <p>Rails uses savepoints to achieve nested transactions with MySQL, nested transactions.</p>
                                </div>
                            </div>
                             <div className="media">
                                <Link to={``} className="pull-left">
                                    <img src="https://i.ytimg.com/vi/IdkLx2pqYGg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJRE2nKx2lxm9g1sEQPPSqZb5_ig" alt="" className="media-object" style={{ width: "64px", height: "64px" }} />
                                </Link>
                                <div className="media-body">
                                    <h4 className="media-heading">Cron jobs</h4>
                                    <p>Whenever is a Ruby gem that provides a clear syntax for writing and deploying cron jobs. Installation. $ gem install whenever.</p>
                                </div>
                            </div>
                        </div>
      
                        <div className="col-lg-4 workexperience">
                            <h3>My Work Experience</h3>
                            <hr/>
                            <Link to={`telemedmd`}>
                                <img className="img-thumbnail" src="telemedmd.jpg" alt="TelemedMD" style={{ width: "50%", height: "20%" }}/>
                            </Link>
                            <Link to={`/vacation`}>
                                <img className="img-thumbnail" src="vacation.png" alt="Vacation" style={{ width: "50%", height: "20%" }}/>
                            </Link>
                            <Link to={`/A_la_Calc`}>
                                <img className="img-thumbnail" src="A_la_Calc.png" alt="A la Calc" style={{ width: "50%", height: "20%" }}/>
                            </Link>
                            <Link to={`/pds`}>
                                <img className="img-thumbnail" src="Premiere_Digital_Services.jpg" alt="Premiere Digital Services" style={{ width: "50%", height: "20%" }}/>
                            </Link>
                            <hr />
                            <h3>Freelance Experience</h3>
                            <Link to={`/jaguar`}>
                                <img className="img-thumbnail" src="Jaguar.jpg" alt="Jaguar" style={{ width: "25%", height: "15%" }}/>
                            </Link>
                            <Link to={`/landrover`}>
                                <img className="img-thumbnail" src="Land-Rover.png" alt="Land Rover" style={{ width: "25%", height: "15%" }}/>
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
