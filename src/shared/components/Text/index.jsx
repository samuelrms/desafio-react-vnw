import PropTypes from "prop-types";
import { forwardRef } from "react";

/**
 * Um componente de texto flexível que pode ser renderizado como qualquer elemento de texto.
 *
 * @param {string} elementType - O tipo de elemento HTML a ser renderizado.
 * @param {React.Node} children - Elementos filhos a serem renderizados.
 * @param {string} className - Classes CSS extras para personalização.
 * @param {object} props - Outras propriedades adicionais para o elemento.
 * @param {React.Ref} ref - Referência para o elemento
 */
export const Text = forwardRef(
  ({ elementType = "p", children, className = "", ...props }, ref) => {
    const Element = elementType || "p";

    return (
      <Element ref={ref} className={className} {...props}>
        {children}
      </Element>
    );
  }
);

Text.displayName = "Text";

Text.propTypes = {
  elementType: PropTypes.oneOf([
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "pre",
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
};
