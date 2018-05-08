# chart
chart generator using react js and recharts

A aplicação está dividida em três componentes: App.js, SelectionBox.js e Chart.js

App.js é o componente pai que guarda todas as informações e decide o que fazer com elas, SelectionBox.js é um componente filho que gera o formulário que recebe os inputs para gerar do gráfico. Chart.js é um stateless component que recebe informações(props) e se baseando nelas gera o gráfico. Utilizei uma biblioteca de React chamada Recharts para gerar o gráfico. A comunicação entre os componentes ficou assim: App.js recebe informações de SelectionBox.js via callBack e manda para Chart.js via props e assim Chart.js gera o gráfico.
Deixei um dos requerimentos de fora: consumir a API para simular bitcoin, minhas habilidades como programador react são de iniciantes e não tive tempo para pesquisar como fazer durante o tempo disponível. Em três dias pesquisei bastante e fiquei determinado em fazer essa aplicação, fiz seguindo a documentação encontrada na internet.
Não fiz seguindo Redux pois não havia ouvido falar de Redux até então, então não me senti confiante em aprender enquanto fazia, mas já comecei a estudar para aplicar nos meus próximos projetos. Fiz com determinação e vontade, e estou sempre querendo aprender mais para crescer e esse desafio foi um bom motivador para melhorar meus conhecimentos.
