export const posts = [
    {
        id: '1',
        title: 'Projeto Socorros S.A.V.',
        subtitle: 'Meu primeiro projeto em React.js com Express.js e MongoDB',
        content: 'Este primeiro projeto foi uma experiência incrível. Além de ser uma aplicação real, ele me ajudou a aprofundar meus conhecimentos na framework. Ainda há pontos que preciso melhorar dentro do projeto, mas, tirando isso, foi super interessante. Aprendi, por exemplo, a importância de manter um plano de desenvolvimento e de ter uma boa comunicação com o cliente.',
        images: [
            'https://raw.githubusercontent.com/aubaro01/SocorrosSav/main/public/sav.ico',
        ],
        code: []
    },
    {
        id: '3',
        title: 'PC AUTO',
        subtitle: 'Sistema de gestão para oficina mecânica em Python',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
        images: [
            'https://exemplo.com/pcauto-diagrama.png',
            'https://exemplo.com/pcauto-interface.jpg'
        ],
        code: [{
            language: 'sql',
            content: `-- Exemplo de query otimizada
SELECT clientes.nome, COUNT(ordens_servico.id) AS total_os
FROM clientes
LEFT JOIN ordens_servico 
  ON clientes.id = ordens_servico.cliente_id
GROUP BY clientes.nome
HAVING total_os > 5;`
        }]
    },
    {
        id: '2',
        title: 'Internship',
        subtitle: 'Experiência de estágio em Software Development',
        content: 'Em Construção',
        images: [],
        code: []
    }
];
