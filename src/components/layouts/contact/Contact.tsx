import Icon from "@/components/icons/Icon";
import styles from "./contact.module.css";
import Email from "@/components/common/email/Email";
import IEmailService from "@/services/IEmailService";
import { IValidateService } from "@/services/IValidateService";

interface ContactProps {
  emailService: IEmailService;
  validateService: IValidateService;
}

export default function Contact({
  emailService,
  validateService,
}: ContactProps) {
  return (
    <section className={styles.container} id="contact">
      <div className="absolute bg-[#2D235C] h-[30rem] w-[30rem] left-[-20rem] top-[-5rem] rounded-full blur-3xl z-0" />
      <Icon
        name="light"
        className="absolute top-[100px] left-[3px] rotate-12 z-0"
      />

      <div className={styles.info}>
        <div>
          <h2 className={styles.title}>Vamos conversar?</h2>
          <p className={styles.description}>
            Estou sempre aberto a novas oportunidades, colaborações ou apenas um
            bate-papo sobre tecnologia. Sinta-se à vontade para me enviar uma
            mensagem!
          </p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Icon name="email" /> lucasmontenegro475@gmail.com
          </li>
          <li className={styles.item}>
            <Icon name="linkedin" /> linkedin.com/in/lucasmontenegro
          </li>
          <li className={styles.item}>
            <Icon name="github" /> github.com/lukinhas563
          </li>
        </ul>
      </div>

      <Email emailService={emailService} validateService={validateService} />
    </section>
  );
}
