import React, { useContext } from 'react';
import './ServiceDetail.css';
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetail = ({ services }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    const [serviceData, setServiceData] = useContext(UserContext);

    console.log(serviceData);
    const handleServiceData = data => {
        setServiceData(data);
    }
    return (      
        <div className="col-lg-4 col-md-4 col-sm-6 text-center services-card">
        <animated.div
            style={{border: 0}}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            >
            <Link to="/dashboard/order" style={{ textDecoration: 'none' }}>
                <div onClick={() => handleServiceData(services)}>
                    <img style={{height: '50px'}} src={`data:icon/jpeg;base64,${services.icon.img}`} alt="" />
                    <h5 className="mt-3 mb-3">{services.title}</h5>
                    <p className="text-secondary">{services.description}</p>
                </div>
            </Link>
            </animated.div>
        </div>
    );
};

export default ServiceDetail;