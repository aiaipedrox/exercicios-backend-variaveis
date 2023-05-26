precoDoTenis = 129.99;
const meuDinheiro = 80.00;

const desconto = precoDoTenis - meuDinheiro;

const cupom = 100 * desconto / precoDoTenis;

console.log(`O valor do cupom deve ser ${cupom}%`);

