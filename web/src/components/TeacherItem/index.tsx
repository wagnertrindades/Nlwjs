import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

interface TeacherItemProps {
  teacherPhoto: string;
  teacherName: string;
  classTheme: string;
  prince: number;
  description: string;
}

const TeacherItem: React.FC<TeacherItemProps> = props => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.teacherPhoto} alt={props.teacherName} />
        <div>
          <strong>{props.teacherName}</strong>
          <span>{props.classTheme}</span>
        </div>
      </header>

      <p>{props.description}</p>

      <footer>
        <p>
          Preço/hora:
          <strong>R$ {props.prince}</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
