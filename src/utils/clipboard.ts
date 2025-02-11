export function copyToClipboard(event: MouseEvent, text: string) {
    event.preventDefault();
    alert("copiado")
    console.log("copiado")
    /* navigator.clipboard
      .writeText(text)
      .then(() => alert("¡Correo copiado al portapapeles! 🚀"))
      .catch((err) => console.error("Error al copiar: ", err)); */
  }