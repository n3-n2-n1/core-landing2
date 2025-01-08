import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Función para manejar el desplazamiento al ID si se pasa un `href`
  const handleScroll = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault(); // Evita el comportamiento predeterminado de navegación
      const targetId = href.slice(1); // Obtén el ID sin el '#'
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Llama a cualquier función `onClick` adicional que se haya proporcionado
    if (onClick) onClick(e);
  };

  // Estilos del botón
  const classes = `button relative inline-flex items-center justify-center h-11 px-${px || "7"} 
    transition-all duration-300 
    ${white ? "text-n-12 bg-white border border-gray-300 hover:bg-gray-100" : "text-white bg-black hover:bg-gray-900"} 
    rounded-full shadow-md hover:shadow-lg ${className || ""}`;

  const spanClasses = "relative z-10";

  // Renderiza un botón o un enlace dependiendo de `href`
  const renderButton = () => (
    <button className={classes} onClick={handleScroll}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={handleScroll}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
