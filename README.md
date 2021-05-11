# Expressões regulares: Capturando textos de forma mágica
Curso de REGEX da Alura

* Entenda o que são expressões regulares
* Valide formulários HTML
* Aprenda a identificar CPF, CEP, emails e outros documentos
* Crie expressões regulares eficientes
* Use classes, âncoras, quantifiers e grupos
* Execute expressões regulares na sua linguagem

# Pattern (expressão regular)

* \d{3}\.\d{3}\.\d{3}-\d{2}  - localiza o formato de um cpf 123.456.789-00
* \d{3}\.?\d{3}\.?\d{3}[-.]?\d{2} - localiza cpf que não esteja respeitando a máscara exemplos: 12345678900 ou 123.456.789.00
* \d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2} - localiza o formato de um cnpj 12.345.678/9000-00
* \d{5}-\d{3} - localiza o formato do cep 12345-678
* [A-Z]{3}-\d{4} - localiza placa de carros exemplo AAA-0000
* \bPALAVRA\b - localiza um palavra em um texto
* ^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$ - validando um email
* <h1.+?>([\w\sõãí.]+)</h1> - localiza tag  \<h1 class="text-left"\>Expressões regulares\</h1\> ***(deixamos o quantifier preguiçoso)***
* <h1[^>]+>([\w\sõãí.]+)</h1> - localiza tag  \<h1 class="text-left"\>Expressões regulares\</h1\> ***(usamos um quantifier de negação)***
* <(h[1-6]).+?>([\w\sõãí.]+)<\/\1> - localiza tag \<h1 class="text-left"\>Expressões regulares\</h1\> ***(usamos BackReference para garantir que a mesma tag vai ser usada no final)***
* [^Z\d] - localiza todos os caracteres excluindo o que está na expressão regular exemplo se usarmos essa expressão regular neste alvo *Z171PZ7AZ23PZ7819AZ78GZ1AZ99IZ34O* você encontrará a palavra 'PAPAGAIO' pois ele excluirá da busca todas as letras Z seguidas de números
