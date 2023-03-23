# **Ecomm**

Projeto de Ecommerce criado durante o programa LevelUp da Alura.

---

## The Twelve-Factor App

- Implementações

### I. Base de Código

Esse conceito é aplicado na utilização do Git para versionamento do código através da utilização de um repositório.

### II. Dependências

Esse conceito é aplicado no "package.json" e "package-lock.json", pacotes presentes em cada parte do projeto, especificando as dependências e separando-as do resto do código.

### III. Configurações

Esse conceito é aplicado nos arquivos ".env" da biblioteca "dotenv", é neles onde estão situadas as variáveis de ambiente  espalhadas por todo o código. Detalhe importante, os arquivos ".env" não passam pelo versionamento, mantendo assim, a confidencialidade dos dados.

### IV. Serviços de Apoio

Esse conceito é aplicado na utilização de banco de dados (MySQL e MongoDB), anexados ao código por meio de URL ou credenciais para configuração, com pouco acoplamento e fácil alteração se necessário.  

### V. Construa, lance, execute

Esse conceito é aplicado através do Docker, ele fica responsável por baixar as dependências e tudo necessário para execução por meio de arquivos chave para criação das imagens (Dockerfiles). Em seguida, cria os containers e realiza todo o lançamento da aplicação, que é incializada e executada por meio de comandos preestabelecidos (docker-compose.yml e Dockerfile).

### VI. Processos

Esse conceito é aplicado na realização de vários processos, que por sua vez não guardam estados. Os estados são guardados pelos serviços de apoio citados anteriormente.

### VII. Vínculo de Porta

Esse conceito é aplicado na exposição das portas para realização de requisições HTTP durante o uso do aplicação. Ou seja, todo o processo está auto-contido na execução do projeto, sem a necessidade de terceiros.

### VIII. Concorrência

Esse conceito é aplicado na execução de diversos processos onde não existem depedências entre sevriços, permitindo a escalabilidade do projeto.

### IX. Descartabilidade

Esse conceito é aplicado na possibilidade de executar ou derrubar a aplicação a qualquer momento, facilitando mudanças de código e testes. Privilégio promovido pelo o uso de containers do Docker.

### X. Paridade entre desenvolvimento e produção

Esse conceito é aplicado nas semelhanças entre todos os meios, seguindo a mesma orientação de código e execução realizada via Docker.

### XI. Logs

Esse conceito é aplicado nos logs informados no console, eles sinalizam todos os eventos visando o controle dos fluxos na aplicação.

### XII. Processos de Admin

Esse conceito não é aplicado no projeto.

---

## Microservices Patterns

- Aplicabilidade

### Serviços de domínio

Esse conceito é aplicado inicialmente por meio da modelagem e funcionalidades do domínio. Posteriormente, estrutaramos a persistência dos dados e que ações podem ser tomadas com o uso de APIs REST e outros.

### Serviços de negócio

Esse conceito é aplicado quando há a utilização de mais de um domínio envolvido no serviço. Nessa aplicação é um caso único mas pode ser observado na comunicação entre o "order" e o "finance" no pagamento de um pedido.

### API Gateway

Esse conceito é aplicado para que o acesso à aplicação seja feito por um ponto único, tornando não só a comunicação entre os serviços mais fácil, mas também toda a parte de segurança, como autenticação e autorização.

### Agregador de processos

Esse conceito é aplicado quando determinada operação requer mais de um processo complexo para sua execução. Um bom exemplo são as comunicações feitas em "order" que trabalham com informações recebidas de vários outros processos.

### Edge Service

Esse conceito ainda não é aplicável, pois não há necessidade de um gateway mais específico como esse no projeto.

### Single database vs Bancos diferentes

Esse conceito é aplicado na utilização de mais de um banco de dados, separando os serviços e promovendo a escalabilidade de cada um.

### Eventos assíncronos‌

Esse conceito é aplicável.

### Agregação de logs

Esse conceito ainda não é aplicável, pois não há necesidade de uma divisão tão específica dos logs ou padronização, uma vez que a aplicação ainda não foi colocada no ar.

### Agregação de métricas

Esse conceito ainda não é aplicável tendo em vista que ainda não estamos trabalhando com um grande processamento de acessos e requisições, assim que a aplicação estiver dísponível para uso, uma análise mais minuciosa se torna necessária.
