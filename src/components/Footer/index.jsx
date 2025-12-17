import React from "react";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <span>
        <strong>Ivan Martins Alves</strong>
      </span>

      <span>
        CNPJ: 64.034.041/0001-81
      </span>

      <span>
        Contato:{" "}
        <a href="mailto:ivanmat@martcode.com.br">
          ivanmat@martcode.com.br
        </a>
      </span>

      <span>
        © {new Date().getFullYear()} MartCode
      </span>
    </Container>
  );
}

