import PropTypes from "prop-types";
import { SearchIcon } from "../../../assets/icons/search";
import { Stack } from "../Stack";
import styles from "./SearchBar.module.scss"; // Certifique-se de criar o arquivo de estilos

/**
 * Componente de barra de pesquisa com um botão de busca.
 *
 * @param {string} placeholder - Placeholder para o campo de busca.
 * @param {function} onSearch - Função a ser chamada ao clicar no botão de busca.
 */
export const SearchBar = ({
  placeholder = "O que você procura?",
  onSearch,
}) => {
  return (
    <Stack className={styles.searchContainer}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
      />
      <button className={styles.searchButton} onClick={onSearch}>
        <SearchIcon />
      </button>
    </Stack>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};
