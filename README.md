# Projeto jQuery - Site Informativo Coronavírus

Projeto final do módulo de jQuery do curso Web Full Stack da [Soul Code Academy](https://soulcodeacademy.org/) no 44º dia do Curso de Web Developer Full Stack.

**Equipe**: Giovanni Marcon, Larisse Rodrigues(_@helloLari_) e Breenda Welly"(_@weleedev_).

**Objetivo**: Trate que o mesmo será desenvolvido para um cliente final , podendo ser uma prefeitura, estado ou iniciativa privada, onde deve o cadastro e controle de doses vacinais.

---

## REQUISITOS:

#### Deve conter:

1. Informações sobre Vacinas aprovadas em fase emergencial (Informando eficácia e métodos de cada uma)
2. Protocolos de combate adotados (Vide OMS)
3. Potenciais técnicas de tratamento e/ou novos medicamentos
4. Uma pagina genérica com o "quem somos" onde deverá conter:
    - Espaço genérico onde seja possível incluir informações do cliente final;
    - Espaço aos desenvolvedores da pagina podendo conter informações de cada desenvolvedor e/ou empresa desenvolvedora;
5. Formulário de Vacinação para covid-19. O qual:
    - Colete as informações pessoais;
      **Obrigatórios** (Data de Nascimento, sexo, gestante, Profissão, Etnia, CPF, Nome completo e Cartão SUS, Comorbidades, peso, altura);
      **Não Obrigatórios**: Qualquer outro dado relevante.
    - Deverá colocar quais vacinas o usuário já possui no seu cartão (caixa de seleção);
    - Ao coletar as informações informar em uma div em qual fase de vacinação o usuário está contemplado ou não contemplado;
    - Uma barra de progresso onde o usuario verifique o seu progresso de preenchimento dos campos , antes de poder clicar no botão de enviar a barra mostre 100% ou alguma alternativa perceptível de completação;
6. Galeria de fotos que contenha fotos referente a campanha de vacinação;
7. Uma pagina que indique o numero de ocupação de leitos UTI e enfermaria e informe a fase de alerta a contaminação bem como indique em uma tabela quais setores economicos podem funcionar ou não , a entrada de dados de ocupação deve ser feito com 2 input e automaticamente deve mudar o padrão de cor(seguindo a fase) de algum elemento da pagina (tabela , plano de fundo ,ETC). Devido a cada estado estimar um padrão iremos nos basear pelo do estado de SP:https://www.saopaulo.sp.gov.br/wp-content/uploads/2020/05/plano-sp-fases-e-criterios.pdf

## Extras:  

**Geral**: Botão de acessibilidade visual , Data e hora do sistema nas paginas;  
**Formulário**: Os campos devem ter validações;  
**Idade** : Não pode idade negativa ao maior que 130 anos;  
**Profissão** : Indicado que possa existir um seletor ou auto-completar para profissões com base no plano de vacinação , Caso não previsto disponibilizar um campo (outros)
**Etnia** : Seletor com opção de não informado;  
**Sexo** : se feminino habilitar o campo de gestante (sim/Não);  
**CPF** : Validador com um placeholder da tipagem;  
**Comorbidade**: Que influenciem na ordem de vacinação ou cuidados;  
Baseado no Peso e altura fornecer o IMC do usuario para fins de classificação em comorbidade;  
**Jquery**: Utilizar obrigatoriamente os métodos de eventos (blur(), click(), focus(), scroll()); Efeito de Fade(obrigatoriamente) , Efeito de Slide (Obrigatoriamente), Efeito de Toggle (Obrigatoriamente), é permitido usar mais efeitos mas os anteriores tem que acontecer e serem comentados nas linhas de código.  
**Jquery Ui**: Utilizar ao menos 3 aplicações (accordion sendo obrigatório) e comentar no código qual está sendo utilizado;  
