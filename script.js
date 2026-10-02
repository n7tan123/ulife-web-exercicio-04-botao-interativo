// Escutamos o clique e alteramos a classe e os textos no DOM.
const button = document.querySelector('#activate');
const message = document.querySelector('#message');
const description = document.querySelector('#description');
button.addEventListener('click', () => {
  const active = document.body.classList.toggle('shield-on');
  message.textContent = active ? 'Escudo Aurora ativado!' : 'Escudo em espera';
  description.textContent = active ? 'A estação está protegida. O caminho está iluminado.' : 'A estação está no modo de observação.';
  button.textContent = active ? 'Desativar escudo Aurora' : 'Ativar escudo Aurora';
  button.setAttribute('aria-pressed', String(active));
});
