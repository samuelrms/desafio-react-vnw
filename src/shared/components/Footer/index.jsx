import facebook from "../../../assets/img/facebook.png";
import instagram from "../../../assets/img/instagram.png";
import linkedin from "../../../assets/img/linkedin.png";
import twitter from "../../../assets/img/twitter.png";
import youtube from "../../../assets/img/youtube.png";
import { Stack } from "../Stack";
import { Text } from "../Text";
import styles from "./Footer.module.scss";

const socialMedia = [
  {
    name: "Facebook",
    icon: facebook,
  },
  {
    name: "Twitter",
    icon: twitter,
  },
  {
    name: "Youtube",
    icon: youtube,
  },
  {
    name: "Linkedin",
    icon: linkedin,
  },
  {
    name: "Instagram",
    icon: instagram,
  },
];

export const Footer = () => {
  return (
    <Stack className={styles.container}>
      <Stack className={styles.footer}>
        <Text>4002-8922</Text>
        <Stack className={styles.socialMedia}>
          {socialMedia.map((social) => (
            <img key={social.name} src={social.icon} alt={social.name} />
          ))}
        </Stack>
      </Stack>
      <Stack className={styles.copy}>
        <Text>
          Layout desenvolvido pela Vai Na Web para fins educativos - 2024
        </Text>
      </Stack>
    </Stack>
  );
};
