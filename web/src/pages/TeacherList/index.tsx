import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject " type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input id="week-day" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          teacherPhoto="https://avatars1.githubusercontent.com/u/16762195?s=460&u=e0f046e2c25a9f06a07ca88ea4a3f32a070a8af6&v=4"
          teacherName="Wagner Trindade"
          classTheme="Biologia"
          prince={90.0}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse tempor viverra enim porttitor luctus. 
                        Sed non neque varius, consectetur elit non, gravida risus. 
                        Aliquam malesuada consequat ex id fringilla.
                        Sed eleifend ante eget purus luctus porta. 
                        Quisque sagittis nulla bibendum purus maximus pellentesque.
                      "
        />

        <TeacherItem
          teacherPhoto="https://avatars1.githubusercontent.com/u/16762195?s=460&u=e0f046e2c25a9f06a07ca88ea4a3f32a070a8af6&v=4"
          teacherName="Wagner Trindade"
          classTheme="Biologia"
          prince={90.0}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse tempor viverra enim porttitor luctus. 
                        Sed non neque varius, consectetur elit non, gravida risus. 
                        Aliquam malesuada consequat ex id fringilla.
                        Sed eleifend ante eget purus luctus porta. 
                        Quisque sagittis nulla bibendum purus maximus pellentesque.
                      "
        />

        <TeacherItem
          teacherPhoto="https://avatars1.githubusercontent.com/u/16762195?s=460&u=e0f046e2c25a9f06a07ca88ea4a3f32a070a8af6&v=4"
          teacherName="Wagner Trindade"
          classTheme="Biologia"
          prince={90.0}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse tempor viverra enim porttitor luctus. 
                        Sed non neque varius, consectetur elit non, gravida risus. 
                        Aliquam malesuada consequat ex id fringilla.
                        Sed eleifend ante eget purus luctus porta. 
                        Quisque sagittis nulla bibendum purus maximus pellentesque.
                      "
        />
      </main>
    </div>
  );
}

export default TeacherList;
