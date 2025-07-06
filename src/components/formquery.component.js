import React, { Component } from "react";
import $ from "jquery/dist/jquery";

class SomethingWithJquery extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();

      var $action = $(this).prop("action");
      var $data = $(this).serialize();
      var $this = $(this);

      $this.prevAll(".alert").remove();

      $.post(
        $action,
        $data,
        function (response) {
          if (response == "error") {
            alert("aaa");
            $this.before(
              '<div class="alert  alert-warning">Došlo je do greške. <br />Molimo pokušajte ponovo kasnije!</div>'
            );
          }

          if (response == "success") {
            $this.before(
              '<div class="alert alert-success">Hvala Vam na poslatoj poruci. <br />Odgovorićemo Vam u najkraćem mogućem roku!</div>'
            );
            $this.find("input, textarea").val("");
          }
        },
        "json"
      );
    });
  }

  render() {
    return (
      <div>
        <form
          id="contactForm"
          action="https://contact-controller.bet.org.rs/email/send"
          method="POST"
        >
          <div class="row">
            <div class="col-md-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ime i Prezime"
              />
            </div>
            <br />
            <div class="col-md-4">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Naslov"
              />
            </div>
            <br />
            <div class="col-md-4">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
              />
              <input
                type="hidden"
                id="sendto"
                name="sendto"
                value="tvoj@email.com"
              />
              <input
                type="hidden"
                id="sendfrom"
                name="sendfrom"
                value="contact@nekafirma.rs"
              />
            </div>
            <br />
            <br />
          </div>
          <textarea
            placeholder="Poruka"
            id="message"
            name="message"
            rows="5"
            cols="70"
          ></textarea>
          <br />
          <button class="btn btn-primary pull-right" type="submit">
            Pošalji
          </button>
        </form>
      </div>
    );
  }
}

export default SomethingWithJquery;
