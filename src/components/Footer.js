import React from 'react'
import { FaFacebook , FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
        <footer className="footer text-center fixed-bottom bg-secondary">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Ramat Gan
                            <br />
                            ISRAEL
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    {/* FaFacebook , FaInstagram, FaLinkedin, FaYoutube  */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaFacebook/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaInstagram/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaLinkedin/></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaYoutube/></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Gefen</h4>
                        <p className="lead mb-0">
                            gefen is genius
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; gefen 2022</small></div>
        </div>


    </div>
  )
}

export default Footer