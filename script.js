function generateHTML() {
  const productName = document.getElementById("productName").value.trim();
  const amazonLink = document.getElementById("amazonLink").value.trim();
  const mercadolivreLink = document.getElementById("mercadolivreLink").value.trim();
  const imageText = document.getElementById("imageText").value;
  const imageInput = document.getElementById("image");
  const generatedHtml = document.getElementById("generatedHtml");
  const preview = document.getElementById("preview");

  // Validação dos campos
  if (!productName) {
    alert("Nome do Produto não pode estar vazio!");
    return;
  }

  const isValidLink = (link) =>
    link.startsWith("http://") || link.startsWith("https://");

  if (!isValidLink(amazonLink)) {
    alert("Link da Amazon inválido. Deve começar com http:// ou https://");
    return;
  }

  if (!isValidLink(mercado livreLink)) {
    alert("Link do Mercado Livre inválido. Deve começar com http:// ou https://");
    return;
  }

  if (!imageText) {
    alert("Por favor, selecione um texto para aparecer na imagem.");
    return;
  }

  let imageUrl = "";
  if (imageInput.files && imageInput.files[0]) {
    imageUrl = URL.createObjectURL(imageInput.files[0]);
  } else {
    alert("Por favor, selecione uma imagem.");
    return;
  }

  // Código HTML com layout melhorado
  const htmlCode = `
<div style="max-width: 300px; font-family: 'Bree Serif', serif; margin: auto; text-align: center;">
  <div style="position: relative; display: inline-block; width: 100%;">
    <img src="${imageUrl}" alt="Imagem do produto" style="width: 100%; aspect-ratio: 9 / 16; object-fit: cover; border: 1px solid #ccc; border-radius: 4px;">
    <div style="position: absolute; top: 10px; left: 10px; background-color: red; color: white; font-weight: bold; padding: 5px 10px; border-radius: 4px;">
      ${imageText}
    </div>
  </div>

  <h2 style="margin-top: 15px; font-size: 18px;">${productName}</h2>

  <a href="${amazonLink}" target="_blank" style="text-decoration: none;">
    <button style="background-color: #17a2b8; border: none; padding: 8px 12px; border-radius: 4px; color: white; cursor: pointer; margin-top: 10px; display: inline-block;">
      Ver na Amazon
    </button>
  </a>

  <a href="${mercado livreLink}" target="_blank" style="text-decoration: none;">
    <button style="background-color: #004085; border: none; padding: 8px 12px; border-radius: 4px; color: white; cursor: pointer; margin-top: 10px; display: inline-block;">
      Ver no Mercado Livre
    </button>
  </a>
</div>
`;

  // Exibir o código gerado
  generatedHtml.value = htmlCode;

  // Mostrar prévia visual
  preview.innerHTML = htmlCode;
}

// Função para copiar o código
function copyHTML() {
  const generatedHtml = document.getElementById("generatedHtml");
  generatedHtml.select();
  document.execCommand("copy");
  alert("Código HTML copiado para a área de transferência!");
}