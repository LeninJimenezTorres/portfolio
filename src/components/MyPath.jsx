import React, {useEffect, useState} from 'react';
import './MyPath.css';
import {useAnimationContext} from "../context/AnimationContext"; // Asume que tienes un archivo CSS para los estilos

const professionalPathData = [
  {
    id: 1,
    date: 'Ene 2023 - Actualidad',
    role: 'Líder Técnico de Software Senior',
    company: 'TechSolutions Global',
    description: 'Dirijo el equipo de desarrollo de la plataforma principal, centrándome en la arquitectura de microservicios y la mentoría de ingenieros junior.',
  },
  {
    id: 2,
    date: 'Mar 2020 - Dic 2022',
    role: 'Desarrollador Full-Stack (Senior)',
    company: 'Innovatech Digital',
    description: 'Diseñé e implementé APIs RESTful y componentes de UI con React. Fui el principal responsable de las integraciones con servicios de terceros.',
  },
  {
    id: 3,
    date: 'Jul 2018 - Feb 2020',
    role: 'Desarrollador Front-End',
    company: 'Creative Web Agency',
    description: 'Desarrollo de interfaces de usuario responsivas y optimizadas para múltiples proyectos de clientes, asegurando la consistencia del diseño.',
  },
  {
    id: 4,
    date: 'Sep 2016 - Jun 2018',
    role: 'Ingeniero de Software Junior',
    company: 'Startup Metrics',
    description: 'Contribuciones al código base principal, realizando pruebas unitarias y participando en revisiones de código. Primer contacto con bases de datos SQL.',
  },
  {
    id: 5,
    date: 'Ene 2016 - Ago 2016',
    role: 'Becario de Desarrollo Web',
    company: 'University Lab Projects',
    description: 'Asistencia en el mantenimiento de la página web del departamento y en la creación de scripts básicos para automatización de tareas.',
  },
];

const MyPath = ({scrollFunc }) => {
  const { showWebSection } = useAnimationContext();
  
  const [clickedOnce, setClickedOnce] = useState(false);
  
  const handleScroll = () => {
    if (clickedOnce) return;
    setClickedOnce(true);
    scrollFunc();
  };
  
  useEffect(() => {
    if (showWebSection) {
    
    }
  }, []);
  
  return (
    <div className="my-path-container">
      <h2>Mi Trayectoria Profesional</h2>
      <div className="path-timeline">
        {professionalPathData.map((job, index) => (
          <div key={job.id} className="path-node">
            {/* El Círculo/Punto en la línea de tiempo */}
            <div className="path-bullet">
              {/* Puedes usar un ícono o solo un punto */}
              <span className="bullet-content">★</span>
            </div>
            
            {/* La Tarjeta de Información del Puesto */}
            <div className="path-card">
              <div className="card-header">
                <h3 className="role-name">{job.role}</h3>
                <span className="job-date">{job.date}</span>
              </div>
              <p className="company-name">
                <i className="fas fa-building"></i> {/* Si usas Font Awesome */}
                {job.company}
              </p>
              <p className="job-description">{job.description}</p>
            </div>
            
            {/* La Línea de Conexión entre nodos (oculta para el último elemento) */}
            {index < professionalPathData.length - 1 && (
              <div className="path-connector"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPath;