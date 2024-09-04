import React from "react";

import * as C from "./styles";

function CoreContent() {
  return (
    <C.Container>
      <C.Title>DocuGenie</C.Title>
      <C.Description>
        <strong>DocuGenie</strong> é uma ferramenta intuitiva e poderos que
        transforma suas ideias e imagens em documentos PDF de Maneira rápida e
        eficiente. Com <strong>DocuGenie</strong>, você pode:
      </C.Description>
      <C.List>
        <C.ItemList>
          <strong>Criar Conteúdo Personalizado:</strong> Utilize nosso
          formulário dinâmico para inserir qualquer número de parágrafos e
          imagens. A flexibilidade é total – adicione quantas seções precisar e
          organize seu conteúdo da maneira que desejar.
        </C.ItemList>
        <C.ItemList>
          <strong>Gerar PDFs Profissionais:</strong> Transforme seu conteúdo em
          PDFs com qualidade profissional usando nossa integração com a
          biblioteca <strong>@react-pdf/renderer</strong>. Cada PDF gerado
          inclui um cabeçalho consistente e imagens em páginas separadas,
          garantindo uma apresentação clara e organizada.
        </C.ItemList>
        <C.ItemList>
          <strong>Visualizar e Baixar:</strong> Antes de finalizar, veja uma
          prévia do seu PDF gerado diretamente na aplicação. Quando estiver
          satisfeito, faça o download do documento em poucos cliques.
        </C.ItemList>
      </C.List>
    </C.Container>
  );
}

export default CoreContent;
