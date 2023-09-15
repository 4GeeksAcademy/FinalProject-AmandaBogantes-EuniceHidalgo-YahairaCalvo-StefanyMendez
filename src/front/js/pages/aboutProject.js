import React from 'react'
import "../../styles/aboutProject.css";
import Logo from "../../img/logo.png";
import Amanda from "../../img/amanda.jpeg";
import Eunice from "../../img/eunice.jpeg";
import Stefany from "../../img/stefany.jpeg";
import Yahaira from "../../img/yaha.jpeg";

export const AboutProject = () => {
    return (
        <>
            <div className='container container-main-aboutProject row m-auto p-0'>
                <div className='col-sm-12 col-md-7 mb-3'>
                    <div className='container-aboutProject p-5'>
                        <img className='logo-aboutProject' src={Logo} alt="Logo" />
                    </div>
                </div>
                <div className='col-sm-12 col-md-5 m-auto text-center'>
                    <div className='container-aboutProject p-5 text-white'>
                        <h1 className='h1-aboutProject mb-5'>Bienvenidos a EyA Solutions</h1>
                        <p className='fs-5'>Somos líderes en innovación tecnológica y desarrollo web.</p>
                    </div>
                </div>
            </div>
            <div className='container container-aboutProject-Dev p-5'>
                <h1 className='h1-aboutProjectDev'>Developers:</h1>
                <div className="row row-cols-1 row-cols-md-4 text-center">
                    <div className="col">
                        <img className='card-img-top photo' src={Amanda} />
                    </div>
                    <div className="col">
                        <img className='card-img-top photo' src={Eunice} />
                    </div>
                    <div className="col">
                        <img className='card-img-top photo' src={Stefany} />
                    </div>
                    <div className="col">
                        <img className='card-img-top photo' src={Yahaira} />
                    </div>
                </div>
            </div>
            <div className='container container-card-obj'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card-aboutProject h-100">
                            <img src="https://img.freepik.com/vector-premium/idea-objetivo-concepto_23-2147505303.jpg?w=2000" className="card-img-top" alt="..." />
                            <div className="card-body-aboutProject">
                                <h5 className="card-title-aboutProject">Objetivo</h5>
                                <p className="card-text-aboutProject">Desarrollar y lanzar con éxito un software de gestión de taller de TI completamente funcional, que satisfaga las necesidades del mercado y obtenga una retroalimentación positiva por parte de los usuarios dentro del plazo estipulado para nuestro proyecto académico.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card-aboutProject h-100">
                            <img src="https://www.emprendedorinteligente.com/wp-content/uploads/2021/06/Que-es-la-mision-de-una-empresa.jpg" className="card-img-top" alt="..." />
                            <div className="card-body-aboutProject">
                                <h5 className="card-title-aboutProject">Misión</h5>
                                <p className="card-text-aboutProject">Nuestra misión es simplificar la gestión de talleres de TI con software innovador, impulsando la eficiencia y el éxito de nuestros clientes en un mundo digital en constante evolución.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-aboutProject h-100">
                            <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inteligencia-competitiva_114360-7297.jpg?w=740&t=st=1694756333~exp=1694756933~hmac=fd986ab3b74f22611b529153e04b57d22f08f5d5f289a4748e5f46b31b1130b2" className="card-img-top" alt="..." />
                            <div className="card-body-aboutProject">
                                <h5 className="card-title-aboutProject">Visión</h5>
                                <p className="card-text-aboutProject">Ser la opción preferida en soluciones tecnológicas para talleres de TI en nuestra región, liderando la transformación digital de nuestros clientes y contribuyendo al crecimiento y la innovación en el sector de la tecnología de la información en nuestro mercado</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container container-card-tech'>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col technology m-auto text-center">
                        <h1 className='title-technology'>Tecnologías:</h1>
                    </div>
                    <div className="col m-auto text-center">
                        <img className='card-img-top' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png'></img>
                        <img className='card-img-top' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'></img>
                        <img className='card-img-top' src='https://academyclass.com/wp-content/uploads/2021/10/Javascript-1200x1200.png'></img>
                        <img className='card-img-top' src='https://static-00.iconduck.com/assets.00/python-icon-512x512-48og66bp.png'></img>
                        <img className='card-img-top' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'></img>
                        <img className='card-img-top' src='https://ih1.redbubble.net/image.2488655049.9084/st,small,507x507-pad,600x600,f8f8f8.jpg'></img>
                        <img className='card-img-top' src='https://cdn-icons-png.flaticon.com/512/6212/6212641.png'></img>
                        <img className='card-img-top' src='https://avatars.githubusercontent.com/u/35137722?v=4'></img>
                        <img className='card-img-top' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img>
                        <img className='card-img-top' src='https://cdn3d.iconscout.com/3d/free/thumb/free-bootstrap-framework-logo-6563486-5453031.png?f=webp'></img>
                        <img className='card-img-top' src='https://static.vecteezy.com/system/resources/previews/013/948/543/original/google-maps-logo-on-transparent-white-background-free-vector.jpg'></img>
                        <img className='card-img-top' src='https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png'></img>

                    </div>
                </div>
            </div>
        </>

    )
}
