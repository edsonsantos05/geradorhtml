// Função principal para gerar o código HTML
function generateHTML() {
  // Capturar valores dos campos
  const productName = document.getElementById("productName").value.trim();
  const amazonLink = document.getElementById("amazonLink").value.trim();
  const mercadolivreLink = document.getElementById("mercadolivreLink").value.trim();
  const imageText = document.getElementById("imageText").value;
  const imageInput = document.getElementById("image");
  const generatedHtml = document.getElementById("generatedHtml");
  const preview = document.getElementById("preview");

  // Validação do campo "Nome do Produto"
  if (!productName) {
    alert("Nome do Produto não pode estar vazio!");
    return;
  }

  // Função para validar se o link começa com http:// ou https://
  const isValidLink = (link) => {
    return link.startsWith("http://") || link.startsWith("https://");
  };

  // Validação do link da Amazon
  if (!isValidLink(amazonLink)) {
    alert("Link da Amazon inválido. Deve começar com http:// ou https://");
    return;
  }

  // Validação do link do Mercado Livre
  if (!isValidLink(mercado livreLink)) {
    alert("Link do Mercado Livre inválido. Deve começar com http:// ou https://");
    return;
  }

  // Validação do campo de texto na imagem
  if (!imageText) {
    alert("Por favor, selecione um texto para aparecer na imagem.");
    return;
  }

  // Processar imagem selecionada
  let imageUrl = "";
  if (imageInput.files && imageInput.files[0]) {
    imageUrl = URL.createObjectURL(imageInput.files[0]);
  } else {
    alert("Por favor, selecione uma imagem.");
    return;
  }

  // Montar o código HTML final
  const htmlCode = `
<div style="max-width: 300px; font-family: 'Bree Serif', serif;">
  <img src="${imageUrl}" alt="Imagem do produto" style="width: 100%; aspect-ratio: 9 / 16; object-fit: cover; border: 1px solid #ccc;">
  <div style="position: absolute; top: 10px; left: 10px; background-color: red; color: white; font-weight: bold; padding: 5px 10px; border-radius: 4px;">${imageText}</div>
  <h2>${productName}</h2>
  <a href="${amazonLink}" target="_blank"><button style="background-color: #17a2b8; border: none; padding: 8px 12px; border-radius: 4px; color: white; cursor: pointer;">Ver na Amazon</button></a>
  <a href="${mercado livreLink}" target="_blank"><button style="background-color: #004085; border: none; padding: 8px 12px; border-radius: 4px; color: white; cursor: pointer;">Ver no Mercado Livre</button></a>
</div>
`;

  // Exibir o código HTML gerado
  generatedHtml.value = htmlCode;

  // Exibir a prévia visual
  preview.innerHTML = htmlCode;
}

// Função para copiar o código HTML para a área de transferência
function copyHTML() {
  const generatedHtml = document.getElementById("generatedHtml");
  generatedHtml.select();
  document.execCommand("copy");
  alert("Código HTML copiado para a área de transferência!");
}