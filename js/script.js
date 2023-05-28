// Obter o formulário e adicionar um evento de envio
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obter valores do formulário
    const form = event.target;
    const destinatario = 'kauancleuton733@gmail.com'; // Seu endereço de e-mail
    const mensagem = form.elements['mensagem'].value;
    const remetente = form.elements['_replyto'].value;
  
    // Enviar o e-mail utilizando o serviço Formspree
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/myyaalbv', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert('E-mail enviado com sucesso');
        // Faça aqui qualquer ação adicional após o envio do e-mail
      }
    };
    xhr.send('_replyto=' + encodeURIComponent(remetente) +
             '&mensagem=' + encodeURIComponent(mensagem) +
             '&_gotcha=');
  
    // Limpar os campos do formulário após o envio
    form.reset();
  });
  
