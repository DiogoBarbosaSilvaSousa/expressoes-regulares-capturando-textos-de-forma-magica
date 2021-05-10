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
* \bPALAVRA\b - localiza um palvra em um texto
* ^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$ - validando um email
