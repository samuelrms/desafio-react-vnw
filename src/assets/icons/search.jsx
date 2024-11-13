import PropTypes from "prop-types";
import { forwardRef } from "react";

export const SearchIcon = forwardRef(
  ({ title, titleId, desc, descId, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={descId}
      {...props}
    >
      {desc ? <desc id={descId}>{desc}</desc> : null}
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#fff"
        d="m19.286 20.404-7.32-7.141a6.977 6.977 0 0 1-2.003 1.077 7.24 7.24 0 0 1-2.411.396c-2.11 0-3.897-.713-5.359-2.14C.731 11.17 0 9.429 0 7.369c0-2.06.731-3.802 2.193-5.228C3.655.713 5.441 0 7.552 0c2.11 0 3.897.713 5.359 2.14 1.462 1.426 2.193 3.169 2.193 5.228 0 .831-.136 1.616-.407 2.352a6.71 6.71 0 0 1-1.104 1.956l7.32 7.141-1.627 1.587ZM7.552 12.47c1.452 0 2.687-.496 3.703-1.487 1.017-.992 1.525-2.197 1.525-3.614 0-1.417-.508-2.621-1.525-3.613-1.016-.992-2.25-1.488-3.703-1.488-1.452 0-2.687.496-3.703 1.488-1.017.992-1.525 2.196-1.525 3.613 0 1.417.508 2.622 1.525 3.614 1.016.991 2.25 1.487 3.703 1.487Z"
      />
    </svg>
  )
);

SearchIcon.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
  desc: PropTypes.string,
  descId: PropTypes.string,
};

SearchIcon.displayName = "SearchIcon";
