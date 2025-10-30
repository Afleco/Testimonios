import React from 'react';
import Testimonio from './Testimonio';

function App() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Emma Wilson en Canadá',
      cargo: 'Ingeniera en Software',
      imagen: 'https://kandiolatam.com/public/media/X3bdud8YRhtB6DD905IQOUJ2KmOtGJdyo6JPFjUZ.webp',
      altImagen: 'Mujer sonriente con cabello rubio en ambiente profesional',
      testimonio: 'React ha transformado completamente mi manera de desarrollar aplicaciones web. La arquitectura basada en componentes me permite crear interfaces reutilizables y mantener mi código organizado. Los hooks como useState y useEffect han simplificado enormemente la gestión del estado. Además, la comunidad es increíblemente activa y siempre encuentro soluciones a mis problemas. Sin duda, React es mi herramienta favorita para el desarrollo frontend.'
    },
    {
      id: 2,
      nombre: 'Carlos Rodríguez en España',
      cargo: 'Desarrollador Full Stack',
      imagen: 'https://media.istockphoto.com/id/1344688156/es/foto/retrato-de-un-hombre-usando-una-computadora-en-una-oficina-moderna.jpg?s=612x612&w=0&k=20&c=EBOt72kuzurni95Q8jIuOrfHbcK3Qr7w-Myb_O-FTKo=',
      altImagen: 'Hombre joven trabajando en su escritorio con un ordenador',
      testimonio: 'Después de trabajar con varios frameworks, React destaca por su simplicidad y flexibilidad. Me encanta cómo el Virtual DOM optimiza el rendimiento de las aplicaciones. La curva de aprendizaje es razonable y una vez que dominas los conceptos básicos, puedes construir aplicaciones complejas rápidamente. El ecosistema de librerías y herramientas es enorme, lo que te da infinitas posibilidades para resolver cualquier problema que enfrentes.'
    },
    {
      id: 3,
      nombre: 'Sophia Chen en Singapur',
      cargo: 'Diseñadora UX/UI',
      imagen: 'https://st.depositphotos.com/1491329/1280/i/450/depositphotos_12800836-stock-photo-beautiful-young-woman-relaxing-outdoors.jpg',
      altImagen: 'Mujer sentada en la base de un árbol disfrutando de la naturaleza',
      testimonio: 'Como diseñadora que aprendió a programar, React fue la elección perfecta. La forma en que puedes ver inmediatamente los cambios mientras desarrollas es increíble. Los componentes me permiten pensar en términos de diseño modular, similar a cómo trabajo en Figma. La documentación oficial es excelente y hay infinidad de tutoriales. React me ha permitido dar vida a mis diseños de manera profesional y eficiente.'
    },
    {
      id: 4,
      nombre: 'David Martinez en México',
      cargo: 'Tech Lead en StartupMX',
      imagen: 'https://www.harrisonclarke.com/hs-fs/hubfs/Harrison-Clarke---Tech-leaders.jpg?width=728&name=Harrison-Clarke---Tech-leaders.jpg',
      altImagen: 'Hombre con camisa blanca sonriendo y de brazos cruzados en ambiente profesional',
      testimonio: 'Liderar un equipo de desarrollo con React ha sido una experiencia fantástica. La consistencia del código entre diferentes desarrolladores es fácil de mantener gracias a las convenciones de React. Las herramientas de desarrollo como React DevTools facilitan enormemente el debugging. La posibilidad de usar React Native para crear aplicaciones móviles con la misma lógica de negocio ha sido un game changer para nuestra startup. React no es solo una librería, es un ecosistema completo.'
    }
  ];

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '650px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {testimonios.map((testimonio) => (
          <Testimonio
            key={testimonio.id}
            nombre={testimonio.nombre}
            cargo={testimonio.cargo}
            imagen={testimonio.imagen}
            altImagen={testimonio.altImagen}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;