import logo from "../../../assets/img/logo.png";
import { ButtonLink } from "../ButtonLink";
import { SearchBar } from "../Search";

import { Stack } from "../Stack";
import { Text } from "../Text";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <Stack elementType="header">
      <Stack elementType="nav" className={styles.container}>
        <Stack className={styles.logo}>
          <img src={logo} alt="Logo livros Vai na Web" />
          <Text elementType="h1">Livros Vai na Web</Text>
        </Stack>
        <Stack className={styles.links}>
          <ButtonLink to={"/"}>Inicio</ButtonLink>
          <ButtonLink to={"/livros-doados"}>Livros doados</ButtonLink>
          <ButtonLink to={"/quero-doar"}>Quero Doar</ButtonLink>
        </Stack>
        <SearchBar />
      </Stack>
    </Stack>
  );
};
