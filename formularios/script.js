const form = document.querySelector('form')

const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const dataNascimento = document.getElementById('data-nascimento');
const email = document.getElementById('email');
const site = document.getElementById('site');
const sistema = document.getElementById('sistema');

const enviarDados = (event) => {
    event.preventDefault();

    console.log(
        nome.value,
        cpf.value,
        dataNascimento.value,
        email.value,
        site.value,
        sistema.value
    );

    const servico = sistema.value ? sistema.value : site.value;
    const texto = `Eu sou ${nome.value}. Quero fazer um ${servico}`


    const url = `https://api.whatsapp.com/send?phone=${
        27996682592
    }&text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
}
